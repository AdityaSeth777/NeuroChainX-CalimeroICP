use candid::{CandidType, Deserialize, Principal};
use ic_cdk::api::call::CallResult;
use ic_cdk_macros::*;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Clone)]
struct Dataset {
    id: String,
    owner: Principal,
    title: String,
    description: String,
    price: u64,
    encrypted_url: String,
    category: String,
    created_at: u64,
}

#[derive(CandidType, Deserialize, Clone)]
struct Purchase {
    dataset_id: String,
    buyer: Principal,
    price: u64,
    timestamp: u64,
}

thread_local! {
    static DATASETS: std::cell::RefCell<HashMap<String, Dataset>> = std::cell::RefCell::new(HashMap::new());
    static PURCHASES: std::cell::RefCell<HashMap<String, Purchase>> = std::cell::RefCell::new(HashMap::new());
}

#[update]
fn register_dataset(
    title: String,
    description: String,
    price: u64,
    encrypted_url: String,
    category: String,
) -> String {
    let caller = ic_cdk::caller();
    let id = ic_cdk::api::time();
    let dataset = Dataset {
        id: id.to_string(),
        owner: caller,
        title,
        description,
        price,
        encrypted_url,
        category,
        created_at: id,
    };

    DATASETS.with(|datasets| {
        datasets.borrow_mut().insert(id.to_string(), dataset);
    });

    id.to_string()
}

#[query]
fn get_dataset(id: String) -> Option<Dataset> {
    DATASETS.with(|datasets| datasets.borrow().get(&id).cloned())
}

#[query]
fn list_datasets() -> Vec<Dataset> {
    DATASETS.with(|datasets| datasets.borrow().values().cloned().collect())
}

#[update]
async fn purchase_dataset(dataset_id: String) -> CallResult<()> {
    let caller = ic_cdk::caller();
    let dataset = DATASETS.with(|datasets| datasets.borrow().get(&dataset_id).cloned());

    if let Some(dataset) = dataset {
        let purchase = Purchase {
            dataset_id: dataset_id.clone(),
            buyer: caller,
            price: dataset.price,
            timestamp: ic_cdk::api::time(),
        };

        // Handle ICP transfer here
        // This is a simplified version - you'll need to implement actual token transfer

        PURCHASES.with(|purchases| {
            purchases
                .borrow_mut()
                .insert(format!("{}:{}", dataset_id, caller), purchase);
        });

        Ok(())
    } else {
        Err(ic_cdk::api::call::RejectionCode::NotFound.into())
    }
}
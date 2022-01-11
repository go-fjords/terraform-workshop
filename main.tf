terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.5.0"
    }
  }
}

provider "google" {
  project     = var.gcloud_project_ids[terraform.workspace]
  region      = var.gcloud_region
  # Not sure if we are using zones anywhere
  zone = "europe-west1-a"
}
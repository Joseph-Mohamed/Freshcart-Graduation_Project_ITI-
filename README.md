# 🛒 FreshCart — E-Commerce Application

> **ITI Graduation Project** | React.js Frontend Application

---

## 📋 Table of Contents
- [✨ Key Features](#-key-features)
- [📊 Application Flow](#-application-flow)
- [⚙️ Tech Stack & Prerequisites](#️-tech-stack--prerequisites)
- [🚀 Quick Start & Installation Guide](#-quick-start--installation-guide)
- [📁 Project Folder Structure](#-project-folder-structure)

---

## ✨ Key Features

- 🛒 **Product Showcase & Recommendation:** Dynamic rendering of products with real-time search filtering.
- 🏷️ **Brands Explorer:** Filter products by top brands (Dell, Canon, Sony, Lenovo, OPPO, etc.).
- 🔍 **Product Detail View:** Interactive image gallery using Swiper.js, detailed specifications, and ratings.
- 📱 **Fully Responsive Design:** Mobile-first UI built using Bootstrap 5 and FontAwesome icons.
- ⚡ **Fast Navigation:** Client-side single-page routing powered by `react-router-dom`.

---

## 📊 Application Flow

```mermaid
graph TD
    A[User Opens App] --> B[Home / Products Page]
    B --> C{User Action}
    
    C -->|Search Product| D[Filter Products List by Name]
    C -->|Click Brand| E[Open Brand Modal / View Brand Products]
    C -->|Click Product Card| F[Navigate to Product Details Page]
    
    F --> G[Display Product Images Swiper]
    F --> H[Add Product to Shopping Cart]
    
    E --> B
    D --> B

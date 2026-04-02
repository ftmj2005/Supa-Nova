
## 📌 Project Overview

**SupaNova** is a **microservices-based e-commerce backend platform** designed for scalability, modular development, and real-time performance.  
The system is composed of independent services — **Auth, User, Product, Order, Payment, Notification, and AI Agent** — communicating through **RabbitMQ** and optimized with **Redis** caching.  
This architecture ensures **high availability**, **fault isolation**, and **easy maintainability** while supporting production-grade deployments.

---

## 🤖 AI-Powered Smart Shopping (LangGraph Agent)

SupaNova includes an **AI Shopping Assistant** powered by **LangGraph**.

Users can simply type what they want, like:
"red Nike shoes"
"budget gaming headphones"
"black waterproof jacket"

The AI Agent:

1. Understands the user request (intent detection)
2. Searches products in the **Product Service**
3. If available → **Automatically adds the item to the cart**
4. If not → Responds with: **Product not available**

This enables a **natural, conversational shopping experience** similar to AI-first commerce platforms.

---

## 🧱 Key Features

| Feature | Description |
|--------|-------------|
| **Microservices Architecture** | Independent scalable services for modular development |
| **AI Smart Product Search** | LangGraph agent handles natural language shopping workflow |
| **JWT + Google OAuth** | Secure authentication and user identity |
| **Razorpay Payments** | Seamless, verified, real-time payment processing |
| **Real-Time Notifications** | Redis + RabbitMQ event-driven updates (orders, product actions) |
| **Production Deployment Ready** | Dockerized services running on AWS ECS/ECR/EC2 |
| **Test-Driven Development** | Services & API layers tested using Jest |

---

## 🏗️ Core Services Breakdown

| Service | Responsibility |
|--------|----------------|
| **Auth Service** | JWT Auth, Google OAuth, session lifecycle |
| **User Service** | User data, preferences & profile management |
| **Product Service** | Product CRUD, stock & search logic |
| **Order Service** | Cart workflow, checkout & fulfillment |
| **Payment Service** | Razorpay integration, transaction validation |
| **Notification Service** | Real-time order & system events |
| **AI Agent Service** | Natural language query interpretation + cart automation |

---

## 💻 Tech Stack

**Backend:** Node.js, Express  
**Frontend:** React  
**Database:** MongoDB  
**Cache & Messaging:** Redis, RabbitMQ  
**AI Agent:** LangGraph  
**Authentication:** JWT, Google OAuth  
**Payments:** Razorpay  
**Containerization:** Docker  
**Deployment:** AWS ECS, ECR, EC2, IAM, NGINX  
**Testing:** Jest (TDD)

---

## 📦 Deployment Overview

All services are **containerized with Docker** and orchestrated using **AWS ECS** with containers stored in **AWS ECR**.  
**NGINX + EC2** handle routing and load balancing.  
**IAM** ensures secure role-based service access.

---

## 🟢 Status

✅ Fully working backend  
✅ Live AWS deployment  
✅ Microservices communicating successfully  
✅ AI agent integrated  
✅ Payment system functional  

---

## 👤 Author

**Manjay Verma**  
Full Stack / Backend / AI Systems Developer  
🔗 GitHub: https://github.com/manjaycoder  
🔗 LinkedIn: https://linkedin.com/in/manjay-verma


If you like the project, **leave a star ⭐** on GitHub — it helps a lot!


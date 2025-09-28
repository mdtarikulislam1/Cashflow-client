```markdown
# 💰 Income & Expense Tracker

## 📜 License

This project is licensed under the MIT License.

## 🔗 Live Demo
[Live Website](https://cashflow-client-six.vercel.app/)

## 🔗 LiveSite repo
[Live Repo](https://github.com/mdtarikulislam1/Cashflow-client)

## 🔗 Server repo
[Server Repo](https://github.com/mdtarikulislam1/Cashflow-server)

---

A web application to track **income and expenses** with interactive charts.  
This project helps users visualize their financial data clearly using **Bar Chart** and **Pie Chart** (browser visits or any static analytics).

---

## 🚀 Features

- ➕ Add Income & Expense with category, method, description
- 📅 Track data by **date (month wise aggregation)**
- 📊 View **Monthly Income vs Expense** (Bar Chart)
- 🥧 Static Pie Chart to display browser visit statistics
- 🌐 Responsive UI for desktop & mobile

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Chart.js
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** React Hooks (`useState`, `useEffect`)

---

## 📂 Project Structure

```

/src
├── Components
│    ├── Footer.jsx   # Shows bar chart of income vs expense
│    ├── MonthlyChart.jsx # Shows Total cashflow in chart
│    ├── Navbar.jsx # Mobile responsive
│    ├── StaticBrowserPie.jsx # Shows static pie chart of browser visits
│    ├── Table.jsx # Shows history by table
│    ├── Total.jsx # Shows Total data by card and finter by date month week 
│
│
├── Layout
│    ├── RootLayout.jsx
│
├── Page
│    ├── About.jsx
│    ├── AddData.jsx
│    ├── CashFlow.jsx
│    ├── Error.jsx
│    ├── Home.jsx
│
├── Routes
│    ├── Router.jsx
│   
│   
└── index.css
└── main.jsx

````

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mdtarikulislam1/Cashflow-client.git
   cd Cashflow-client

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 📊 Example Data Structure

```json
[
  {
    "type": "income",
    "amount": "20000",
    "category": "job",
    "method": "bank",
    "description": "Salary",
    "addDate": "2025-09-27"
  },
  {
    "type": "expense",
    "amount": "5000",
    "category": "food",
    "method": "cash",
    "description": "Dinner expense",
    "addDate": "2025-09-15"
  }
]
```

---

## 📸 Screenshots

## 📊 Monthly Bar Chart
![Monthly Bar Chart](https://i.postimg.cc/xCJTn8VZ/Screenshot-2025-09-28-154015.png)

## 🥧 Browser Pie Chart
![Browser Pie Chart](https://i.postimg.cc/VkgNF2Fq/Screenshot-2025-09-28-154032.png)


---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



```

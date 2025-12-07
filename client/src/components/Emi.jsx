import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/emi.css";

Chart.register(ArcElement, Tooltip, Legend);

export default function EMI() {
  const [loan, setLoan] = useState(1000000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const r = rate / 12 / 100;
  const n = years * 12;

  const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalAmount = emi * n;
  const totalInterest = totalAmount - loan;

  const format = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  const chartData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [loan, totalInterest],
        backgroundColor: ["#d6e4ff", "#4A6BFF"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <section className="emi-section">
      <h2 className="emi-title">EMI Calculator</h2>
      <div className="emi-box">
      <div className="emi-container">


        <div className="emi-chart-box">
          <Doughnut data={chartData} />
          <div className="chart-labels">
            <span><span className="dot p"></span> Principal</span>
            <span><span className="dot i"></span> Interest</span>
          </div>
        </div>

   
        <div className="emi-inputs">


<label>Loan Amount</label>
<div className="input-row">

  <input
    type="range"
    min="50000"
    max="4000000"
    value={loan}
    style={{
      "--value": ((loan - 50000) / (4000000 - 50000)) * 100 + "%"
    }}
    onChange={(e) => setLoan(Number(e.target.value))}
  />

  <input
    type="number"
    className="number-input"
    value={loan}
    min="50000"
    max="4000000"
    onChange={(e) => setLoan(Number(e.target.value))}
  />
</div>


<label>Rate of Interest (p.a)</label>
<div className="input-row">

  <input
    type="range"
    min="5"
    max="20"
    step="0.1"
    value={rate}
    style={{
      "--value": ((rate - 5) / (20 - 5)) * 100 + "%"
    }}
    onChange={(e) => setRate(Number(e.target.value))}
  />

  <input
    type="number"
    className="number-input"
    value={rate}
    step="0.1"
    min="5"
    max="20"
    onChange={(e) => setRate(Number(e.target.value))}
  />
</div>


<label>Loan Tenure (Years)</label>
<div className="input-row">

  <input
    type="range"
    min="1"
    max="30"
    value={years}
    style={{
      "--value": ((years - 1) / (30 - 1)) * 100 + "%"
    }}
    onChange={(e) => setYears(Number(e.target.value))}
  />

  <input
    type="number"
    className="number-input"
    value={years}
    min="1"
    max="30"
    onChange={(e) => setYears(Number(e.target.value))}
  />
</div>



        
          <div className="emi-results">
            <div className="row"><span>Monthly EMI</span><strong>{format(emi)}</strong></div>
            <div className="row"><span>Principal</span><strong>{format(loan)}</strong></div>
            <div className="row"><span>Total Interest</span><strong>{format(totalInterest)}</strong></div>
            <div className="row"><span>Total Amount</span><strong>{format(totalAmount)}</strong></div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}

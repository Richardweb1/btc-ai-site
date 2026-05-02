"use client";

import { useState } from "react";

export default function Home() {
  const [signal, setSignal] = useState("WAIT");

  async function runBot() {
    alert("⚠️ Wallet connection + GenLayer transaction will go here (next step)");
  }

  async function getSignal() {
    alert("⚠️ Reading contract will go here (next step)");
  }

  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      textAlign: "center",
      paddingTop: "80px"
    }}>
      <h1 style={{
        fontSize: "48px",
        background: "linear-gradient(90deg,#c44cff,#00d4ff)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        AI BTC SENTINEL
      </h1>

      <p style={{ color: "#aaa" }}>
        Powered by GenLayer AI
      </p>

      <div style={{
        margin: "40px auto",
        padding: "30px",
        width: "400px",
        borderRadius: "20px",
        background: "#111"
      }}>
        <div style={{ color: "#888" }}>Current Signal</div>

        <div style={{
          fontSize: "50px",
          margin: "20px 0",
          color: "#b44cff"
        }}>
          {signal}
        </div>

        <button onClick={runBot} style={{
          padding: "10px 20px",
          margin: "10px"
        }}>
          RUN AI CHECK
        </button>

        <button onClick={getSignal} style={{
          padding: "10px 20px",
          margin: "10px"
        }}>
          GET SIGNAL
        </button>
      </div>
    </main>
  );
}

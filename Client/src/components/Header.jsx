import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Молодой Крым</div>
      <nav className="nav">
        <div className="nav-item">Главная</div>
        <div className="nav-item">Новости</div>
        <div className="nav-item">Рейтинг</div>
        <div className="nav-item">Мероприятия</div>
      </nav>
    </header>
  );
}
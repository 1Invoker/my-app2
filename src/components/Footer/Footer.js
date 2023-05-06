import React from "react";
import "./Footer.css";

function Footer() {
return (
<footer className="Footer">
<nav>
<ul>
<li>
<a href="/privacy-policy">Политика конфиденциальности</a>
</li>
<li>
<a href="/terms-of-use">Условия использования</a>
</li>
<li>
<p>Авторское право © Фермерское хозяйство 2023</p>
</li>
</ul>
</nav>
<div className="Footer-info">
<p>Адрес: ул. Примерная, д. 1, г. Примерный, Россия</p>
<div className="Footer-map">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21195.635163441436!2d-122.40735280018695!3d37.78867353798367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808297c1d1e9%3A0x84ccbf0108bbd94a!2z0L_RgC4g0JrRgNC10LvRjCwg0KDQvtGB0YHQuNC90LjRjw!5e0!3m2!1sru!2sru!4v1653160090962!5m2!1sru!2sru"
title="map"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
></iframe>
</div>
<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a>
</div>
</footer>
);
}

export default Footer;
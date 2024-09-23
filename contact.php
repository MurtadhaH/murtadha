<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اتصل بنا</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="contact/styles.css">
</head>
<body>
<header>
    <nav id="nav-menu">
        <ul>
            <li><a href="index.php">الرئيسية</a></li>
            <li><a href="about.php">حول الشركة</a></li>
            <li><a href="contact.html">تواصل معنا</a></li>
        </ul>
        <div class="menu-icon" id="menu-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    <div class="logo">
        <img src="imgs/Logo.png" alt="the logo of the company"/>
        <h1>شركة الرؤى الرقمية</h1>
    </div>
</header>
<main>
    <section class="contact">
        <h1>اتصل بنا</h1>
        <p>يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف </p>
        <ul>
            <li>البريد الإلكتروني: <a href="mailto:itc@alruaa.net">itc@alruaa.net</a></li>
            <li>الهاتف: 009647748209488</li>

        </ul>
        <form>
            <label for="name">الاسم:</label>
            <input type="text" id="name" name="name">
            <label for="email">البريد الإلكتروني:</label>
            <input type="email" id="email" name="email">
            <label for="message">الرسالة:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">إرسال</button>
        </form>
    </section>
</main>
<footer>
    <p>&copy; 2023 الشركة</p>
</footer>
<script src="script.js"></script>
</body>
</html>
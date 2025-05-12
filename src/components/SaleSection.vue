<template>
    <section class="sale-section">
        <div class="sale-container">
            <img class="sale-image" src="/src/assets/главная страница/распрадажа.jpg" alt="sale">
            <div class="sale-content">
                <img class="sale-image-2" src="/src/assets/главная страница/sale.png" alt="sale">
                <div class="sale-text">
                    <p>Совершите покупку на сумму от 10 000 ₽ и получите скидку 30% на следующий заказ!</p>
                </div>
                <div class="sale-date-text">
                    <p class="sale-date">1 Июня - 10 Июля 2025</p>
                </div>
                <div class="sale-button">
                    <a href="/ClockWise/catalog">За покупками</a> <!-- Переход на страницу каталога -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.sale-section {
    background-color: rgba(200, 200, 200, 0.5); // светло-серый фон с прозрачностью
    width: 100%;
    min-height: 0;
}

.sale-container {
    display: flex;
    flex-wrap: wrap;
    padding: 6vw 5vw 4vw 5vw;
    gap: 3vw;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
}

.sale-image {
    object-fit: cover;
    max-width: 40vw;
    width: 100%;
    height: auto;
    border-radius: 0;
}

.sale-content {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    min-width: 250px;
    max-width: 40vw;
    width: 100%;
}

.sale-image-2 {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 8vw;
    border-radius: 0;
}

.sale-text p {
    font-size: clamp(1rem, 2vw, 1.4rem);
    text-align: left;
}

.sale-date {
    font-weight: 700;
    font-size: clamp(1rem, 1.8vw, 1.4rem);
    line-height: 145%;
    letter-spacing: 0.02em;
    text-align: left;
}

.sale-button a {
    display: block;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #fff;
    background: #000;
    width: 35vw; /* Сделал кнопку меньше */
    max-width: 180px; /* Максимальная ширина кнопки */
    min-width: 90px;
    height: 5vw; /* Сделал кнопку меньше */
    max-height: 40px; /* Максимальная высота кнопки */
    min-height: 30px;
    transition: all 0.3s ease;
    border: none;

    font-size: 0.8rem; /* Меньше текст */
    text-align: center;
    line-height: 40px; /* Центрируем текст по вертикали */

    &:hover {
        background: transparent; /* Прозрачный фон при наведении */
        color: #000; /* Черный текст */
        border: 1px solid #000; /* Черная рамка */
        cursor: pointer;
    }
}

p {
    margin: 0;
}

/* Адаптивность для экранов до 900px */
@media (max-width: 900px) {
    .sale-container {
        flex-direction: column;
        padding: 5vw 2vw;
        gap: 4vw;
    }

    .sale-image, .sale-content {
        max-width: 100%;
    }

    .sale-image-2 {
        max-height: 14vw;
    }

    .sale-button a {
        width: 80%;
        font-size: 0.75rem;
        height: 8vw;
        max-height: 50px;
    }
}

/* Адаптивность для экранов до 600px */
@media (max-width: 600px) {
    .sale-container {
        padding: 3vw 1vw;
        gap: 3vw;
    }

    .sale-image {
        max-width: 100%;
        border-radius: 0;
    }

    .sale-content {
        gap: 3vw;
    }

    .sale-image-2 {
        max-height: 20vw;
    }

    .sale-button a {
        width: 100%;
        max-width: none;
        font-size: 0.75rem;
        height: 10vw;
        max-height: 50px;
    }

    .sale-text p {
        font-size: 1rem;
    }

    .sale-date {
        font-size: 1rem;
    }
}

</style>

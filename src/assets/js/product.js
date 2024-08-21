document.addEventListener('DOMContentLoaded', () => {
    tabsAction();
})


function tabsAction() {
    const tabButtons = document.querySelectorAll('.tabs__button');
    const tabPanes = document.querySelectorAll('.tabs__pane');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', (event) => {
            const tabAttribute = tabButton.getAttribute('data-tab');

            // Удаляем класс active у всех кнопок и панелей
            tabButtons.forEach( btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Добавляем класс active к текущей кнопке и соответствующей панели
            tabButton.classList.add('active');
            document.getElementById(tabAttribute).classList.add('active');
        });
    });
}
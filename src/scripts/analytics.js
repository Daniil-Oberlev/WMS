import '../pages/analytics.css'

const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.querySelector('.toggle-btn')
const listItems = document.querySelectorAll('.list-item')

listItems.forEach((item) =>
  item.addEventListener(
    'click',
    () => (
      listItems.forEach((innerItem) => innerItem.classList.remove('active')),
      item.classList.add('active')
    )
  )
)

toggleBtn.addEventListener('click', () => sidebar.classList.toggle('active'))
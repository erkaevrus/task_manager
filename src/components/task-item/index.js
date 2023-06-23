
function createTaskItem(taskData) {
  return `
    <div class="task-item-container project-item-container">
      <div class="task-item project-item">
        <p class="task-item__title project-item__title">${taskData.title}</p>
        <div class="task-item__description project-item__description">
          <div class="task-item__info project-item__info">
            <p class="task-item__id project-item__id">${taskData.id}</p>
            <p class="task-item__creator project-item__creator">${taskData.creator}</p>
            <div class="status-item status-item_draft">Черновик</div>
          </div>
          <div class="task-item__state project-item__state">
            <p class="task-item__editor project-item__editor">${taskData.editor}</p>
            <div class="task-item__avatar">
              <img src="./image/user-icon.png" alt="avatar">
            </div>
            <button class="button button_small button_secondary">
              <svg class="button__dots" width="4" height="14">
                <use xlink:href="#dots"></use>
              </svg>
            </button>
            <div class="drop-down-menu">
              <ul class="drop-down-menu__list">
                <li class="drop-down-menu__item">Редактировать</li>
                <li class="drop-down-menu__item">Удалить</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`
}

export { createTaskItem }
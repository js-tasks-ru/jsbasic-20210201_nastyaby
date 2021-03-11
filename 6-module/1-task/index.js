/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;

    let table = document.createElement('table');

    table.innerHTML = `
      <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
      </thead>`;

    let row = this.rows.map(rowsItem => {
      return `
        <tr>
          <td>${rowsItem.name}</td>
          <td>${rowsItem.age}</td>
          <td>${rowsItem.salary}</td>
          <td>${rowsItem.city}</td>
          <td><button>X</button></td>
        </tr>
      `;
    }).join('');

    table.innerHTML += `
     <tbody>
        ${row}
      </tbody>
    `;

    table.addEventListener('click', (evt) => {
      this.onDeleteRow(evt);
    });

    this._elem = table;
  }

  onDeleteRow(evt) {
    if (evt.target.tagName !== 'BUTTON') {
      return;
    }

    let tr = evt.target.closest('tr');
    tr.remove();

  }

  get elem() {
    return this._elem;
  }
}

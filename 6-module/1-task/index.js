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
  #rows;
  #elem;
  static #tables = [];

  constructor(rows) {
      this.#rows = rows;
      this.#elem = document.createElement("table");
      this.make();

      this.#elem.dataset.tindex = UserTable.#tables.length;
      UserTable.#tables.push(this);
  }
  get elem() {
      return this.#elem;
  }
  make() {
      let thead = `      
      <thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
      </thead>
      <tbody>` + this.#rows.map(el => `
      <tr>
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.salary}</td>
          <td>${el.city}</td>
          <td><button>X</button></td>
      </tr>              
              `).join("") + `</tbody>`;
      this.#elem.innerHTML = thead;
      for (let b of this.#elem.querySelectorAll("button"))
          b.addEventListener("click", UserTable.rem);
  }

  static rem(event) {
      let row = this.parentElement.parentElement;
      let that = UserTable.#tables[+row.parentElement.parentElement.dataset.tindex];
      that.#rows.splice(row.rowIndex - 1, 1);
      row.remove();
  }
}
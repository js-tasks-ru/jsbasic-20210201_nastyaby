function highlight(table) {
  // ваш код...
  const rowsTable = table.rows;

  for (let i = 0; i < rowsTable.length; i++) {

    const row = rowsTable[i];
    const collStatus = row.lastElementChild;
    const collGender = row.cells[2];
    const collAge = row.cells[1];

    const dataAvailable = collStatus.getAttribute(`data-available`);

    if (dataAvailable === `true`) {
      row.classList.add(`available`);
    } else if (dataAvailable === `false`) {
      row.classList.add(`unavailable`);
    } else {
      row.setAttribute('hidden', true);
    }

    if (collGender.textContent === `m`) {
      row.classList.add(`male`);
    } else if (collGender.textContent === `f`) {
      row.classList.add(`female`);
    }

    if (collAge.textContent < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}

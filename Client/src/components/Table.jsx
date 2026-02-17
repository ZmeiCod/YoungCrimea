const RichPeopleTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="rich-people-table">
        <thead>
          <tr className="table-header">
            <th>#</th>
            <th>Имя</th>
            <th>Состояние</th>
            <th>Изменение</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr
              key={person.id}
              className={`table-row ${
                index % 2 === 0 ? "even-row" : "odd-row"
              }`}
            >
              <td className="rank-cell">
                <span className="rank">{index + 1}.</span>
              </td>
              <td className="person-cell">
                <div className="avatar-container">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="avatar"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // Можно добавить запасной текст или изображение:
                      // e.target.alt = 'Фото отсутствует';
                    }}
                  />
                </div>
                <div className="person-info">
                  <h3 className="name">{person.name}</h3>
                  <p className="position">{person.position}</p>
                </div>
              </td>
              <td className="wealth-cell">
                <span className="currency">$</span>
                <span className="amount">{person.wealth}</span>
                <span className="unit"> млн</span>
              </td>
              <td className="status-cell">
                {person.status === "up" ? (
                  <i className="arrow up">↑</i>
                ) : (
                  <i className="arrow down">↓</i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RichPeopleTable;

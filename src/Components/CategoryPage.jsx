import React, { useEffect, useState } from "react";
import "./../App.css";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    const res = await fetch("https://api.publicapis.org/categories");
    res.json().then((res) => setCategories(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="sectionCategory">
        <form>
          <input
            type="text"
            id="number"
            name="number"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <table className="sectionCategory">
        <tbody>
          <tr>
            <th>Company</th>
          </tr>
          {categories
            .filter(item => {
              if (search === "") {
                return item;
              } else if (item.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryPage;

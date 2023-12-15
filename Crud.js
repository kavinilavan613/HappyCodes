import React, { useState } from "react";

const styles = {
    tableBorder: {
        border: "1px solid black",
        borderCollapse: "collapse",
    },
};

function Crud() {
    const [data, setData] = useState([
        { sno: 1, name: "Surya", email: "mailto:suryaj@kenlasystems.com" },
        { sno: 2, name: "Rakesh", email: "mailto:raakeshr@kenlasystems.com" },
        { sno: 3, name: "Bala Subramani", email: "mailto:balas@kenlasystems.com" },
    ]);

    const [state, setState] = useState({
        sno: "",
        name: "",
        email: "",
    });

    const [edit, setEdit] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit === null) {
            setData([...data, state]);
        } else {
            const updatedData = [...data];
            updatedData[edit] = state;
            setData(updatedData);
            setEdit(null);
        }

        setState({ sno: "", name: "", email: "" });
    };

    const handleEdit = (index) => {
        setEdit(index);
        const selectedItem = data[index];
        setState({ ...selectedItem });
    };

    const handleDelete = (index) => {
        const filteredData = [...data];
        filteredData.splice(index, 1)
        setData(filteredData)
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="S.No"
                    style={{ marginLeft: "5px" }}
                    value={state.sno}
                    onChange={(e) => setState({ ...state, sno: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Name"
                    style={{ marginLeft: "5px" }}
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    style={{ marginLeft: "5px" }}
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                />
                <button style={{ marginLeft: "5px" }} type="submit">
                    ADD
                </button>
            </form>

            <div
                style={{
                    marginTop: "25px",
                }}
            >
                <table style={styles.tableBorder}>
                    <thead>
                        <tr>
                            <th style={styles.tableBorder}>S.No</th>
                            <th style={styles.tableBorder}>Name</th>
                            <th style={styles.tableBorder}>Email</th>
                            <th style={styles.tableBorder}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 &&
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td style={styles.tableBorder}>{item.sno}</td>
                                    <td style={styles.tableBorder}>{item.name}</td>
                                    <td style={styles.tableBorder}>{item.email}</td>
                                    <td style={styles.tableBorder}>
                                        <button onClick={() => handleEdit(index)}>EDIT</button>
                                        <button style={{ marginLeft: "5px" }} onClick={() => handleDelete(index)}>DELETE</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Crud;

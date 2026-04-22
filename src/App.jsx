import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './store/inventory'
import './App.css'

function App() {
  const kirim = useDispatch()
  const list = useSelector((state) => state.inventory.items)
  const [brg, setBrg] = useState('')
  const [jml, setJml] = useState(1)

  const gas = (e) => {
    e.preventDefault()

    if (!brg || jml <= 0) {
      return
    }

    kirim(
      addItem({
        nama: brg,
        qty: Number(jml),
      }),
    )

    setBrg('')
    setJml(1)
  }

  let listContent = <p className="empty">kosong</p>
  if (list.length > 0) {
    listContent = (
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>nama barang</th>
            <th>jumlah</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <main className="app">
      <form className="inventory-form" onSubmit={gas}>
        <label htmlFor="name">nama barang</label>
        <input
          id="name"
          type="text"
          value={brg}
          onChange={(e) => setBrg(e.target.value)}
          required
        />

        <label htmlFor="quantity">jumlah</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={jml}
          onChange={(e) => setJml(e.target.value)}
          required
        />

        <button type="submit">tambah</button>
      </form>

      <section className="inventory-list">
        <h2>daftar barang</h2>
        {listContent}
      </section>
    </main>
  )
}

export default App

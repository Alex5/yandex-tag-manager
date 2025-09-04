import './App.css'

function App() {
  return (
      <section className="mx-auto max-w-3xl py-12">
          <div className="flex flex-col">
              <article className="bg-neutral-100 flex flex-col gap-2 p-2 rounded-xl">
                  <b>16</b>
                  <p>Глюкоза (Glucose) A09.05.023.000.01</p>
                  <ul>
                      <li className="font-bold">Рекомендации</li>
                      <li className="add-recommendation">18. HbA1c (гликированный Hb)</li>
                      <li className="add-recommendation">119. Лейкоцитарная формула</li>
                      <li className="add-recommendation">11. Альфа-амилаза</li>
                      <li className="add-recommendation">ОБС73. Биохимия крови, расш.</li>
                  </ul>
                  <span>3 аналога</span>
              </article>
          </div>
      </section>

  )
}

export default App

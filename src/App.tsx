import './App.css'

function App() {
  return (
      <section className="mx-auto max-w-3xl py-12">
          <div className="flex flex-col">
              <article className="border flex flex-col gap-2 p-2 rounded-xl">
                  <b>16</b>
                  <p>Глюкоза (Glucose) A09.05.023.000.01</p>
                  <b className="font-bold">Рекомендации</b>
                  <ul>
                      <li>
                          <button className="add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                              18. HbA1c (гликированный Hb)
                          </button>
                      </li>
                      <li >
                          <button className="add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                              119. Лейкоцитарная формула
                          </button>
                      </li>
                      <li>
                          <button className="add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                              11. Альфа-амилаза
                          </button>
                      </li>
                      <li>
                          <button className="add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                              ОБС73. Биохимия крови, расш.
                          </button>
                      </li>
                  </ul>
              </article>
          </div>
      </section>

  )
}

export default App

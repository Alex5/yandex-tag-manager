import './App.css'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";

function App() {
  return (
      <section className="mx-auto max-w-3xl py-12">
          <div className="flex flex-col gap-6">
              <div className="border p-2 rounded-xl">
                  <b>Офис:</b>
              </div>
              <div className="flex flex-col gap-6">
                  <article data-productid={16} id="product" className="border flex flex-col gap-2 p-2 rounded-xl">
                      <b>16</b>
                      <p>Глюкоза (Glucose) A09.05.023.000.01</p>
                      <b className="font-bold"></b>
                      <Dialog>
                          <DialogTrigger asChild>
                              <Button>3 рекомендации</Button>
                          </DialogTrigger>
                          <DialogContent>
                              <DialogHeader>
                                  <DialogTitle>Добавить рекомендации</DialogTitle>
                              </DialogHeader>
                              <ul className="w-full">
                                  {["18. HbA1c (гликированный Hb)", "119. Лейкоцитарная формула", "11. Альфа-амилаза", "ОБС73. Биохимия крови, расш."].map(item => (
                                      <li key={item} className="flex w-full items-center justify-between add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                                      <span id="recommendation-product">
                                          {item}
                                      </span>
                                          <Button data-recommendationid={item.split(".").at(0)} size="icon">
                                              <Plus/>
                                          </Button>
                                      </li>
                                  ))}
                              </ul>
                          </DialogContent>
                      </Dialog>
                  </article>
                  <article data-productid={56} id="product" className="border flex flex-col gap-2 p-2 rounded-xl">
                      <b>56</b>
                      <p>Тиреотропный гормон (ТТГ, тиротропин) (Thyroid Stimulating Hormone, TSH)</p>
                      <Dialog>
                          <DialogTrigger asChild>
                              <Button>1 рекомендация</Button>
                          </DialogTrigger>
                          <DialogContent>
                              <DialogHeader>
                                  <DialogTitle>Добавить рекомендации</DialogTitle>
                              </DialogHeader>
                              <ul>
                                  {["АКЦ818. Акция Обследуй щитовидную железу"].map(item => (
                                      <li key={item} className="flex w-full items-center justify-between add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                                      <span  id="recommendation-product">
                                          {item}
                                      </span>
                                          <Button data-recommendationid={item.split(".").at(0)} size="icon">
                                              <Plus/>
                                          </Button>
                                      </li>
                                  ))}
                                  <li>
                                      <button data-recommendationid={"АКЦ818"} id="recommendation-product" className="add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">

                                      </button>
                                  </li>
                              </ul>
                          </DialogContent>
                      </Dialog>
                  </article>
              </div>
          </div>
      </section>

  )
}

export default App

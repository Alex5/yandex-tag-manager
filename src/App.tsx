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
                  <p className="office-name">TESTARMPS2 test МО АРМПС2_МСК 1</p>
              </div>
              <div className="border p-2 rounded-xl">
                  <b>Пациент:</b>
                  <p className="patient-name">Соснин Илья2 Андреевич, 06.10.1990, Медкарта CLBMDX3</p>
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
                          <DialogContent className="add-rec-dialog" data-originproductid={16}>
                              <DialogHeader>
                                  <DialogTitle>Добавить рекомендации</DialogTitle>
                              </DialogHeader>
                              <ul className="w-full">
                                  {["18. HbA1c (гликированный Hb)", "119. Лейкоцитарная формула", "11. Альфа-амилаза", "ОБС73. Биохимия крови, расш."].map(item => (
                                      <li key={item} className="flex w-full items-center justify-between add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                                      <span data-productname={item}>
                                          {item}
                                      </span>
                                          <Button data-recommendationid={item.split(".").at(0)} size="icon" id="add-rec-btn" className="add-rec-btn">
                                              <Plus/>
                                          </Button>
                                      </li>
                                  ))}
                              </ul>
                          </DialogContent>
                      </Dialog>
                  </article>
                  <article data-originproductid={56} id="product" className="border flex flex-col gap-2 p-2 rounded-xl">
                      <b>56</b>
                      <p>Тиреотропный гормон (ТТГ, тиротропин) (Thyroid Stimulating Hormone, TSH)</p>
                      <Dialog>
                          <DialogTrigger asChild>
                              <Button>1 рекомендация</Button>
                          </DialogTrigger>
                          <DialogContent className="add-rec-dialog" data-productid={56}>
                              <DialogHeader>
                                  <DialogTitle>Добавить рекомендации</DialogTitle>
                              </DialogHeader>
                              <ul>
                                  {["АКЦ818. Акция Обследуй щитовидную железу"].map(item => (
                                      <li key={item} className="flex w-full items-center justify-between add-recommendation p-2 hover:bg-neutral-100 active:bg-neutral-200 rounded-xl">
                                      <span data-productname={item}>
                                          {item}
                                      </span>
                                          <Button data-recommendationid={item.split(".").at(0)} size="icon" id="add-rec-btn" className="add-rec-btn">
                                              <Plus/>
                                          </Button>
                                      </li>
                                  ))}
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

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-16 py-24">
      <main className="max-w-4xl">
        <h1 className="text-7xl font-bold tracking-tighter text-foreground mb-8 font-heading">
          Инженерия цифровых смыслов
        </h1>
        <p className="text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Мы — инженеры цифровых смыслов. Проектируем присутствие, материализуя ваши амбиции в масштабируемые цифровые артефакты.
        </p>
        <Button className="h-14 px-8 text-lg rounded-none bg-[#0047FF] hover:bg-[#003bb3]">
          Заказать артефакт
        </Button>
      </main>
    </div>
  );
}

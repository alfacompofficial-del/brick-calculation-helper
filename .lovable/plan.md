## Что делаем

Одностраничный лендинг (`src/routes/index.tsx`) с тёмной индустриальной темой и якорными секциями. Существующий калькулятор кладки расширяем до набора калькуляторов с табами; добавляем секции «Обучение», «Гаджет» и «Магазин».

## Структура страницы

```
Header (sticky, лого + якорные ссылки: Калькуляторы · Обучение · Гаджет · Магазин)
Hero (заголовок, подзаголовок, CTA «Рассчитать», фоновый узор/гранж)
#calculators
  Tabs: Кладка · Стяжка · Штукатурка · Краска · Обои
  (внутри каждого таба — форма + результат)
#learn
  Сетка карточек со статьями/формулами (3–6 шт): кладка, раствор 1:3, расход краски, и т.д.
#gadget
  Презентация концепта «лазерный дальномер / робо-змея»: картинка-плейсхолдер, фичи, форма «Узнать первым» (без бэка — просто toast)
#shop
  Витрина магазина: hero-блок, сетка категорий (кирпич, цемент, инструмент, отделка), контакты
Footer
```

## Калькуляторы (`src/lib/calculators/`)

Выносим существующий `masonry.ts` + добавляем:
- `screed.ts` — стяжка пола: площадь × толщина → объём смеси, мешки 25 кг
- `plaster.ts` — штукатурка: площадь × толщина слоя × расход (кг/м²/мм)
- `paint.ts` — краска: площадь × число слоёв / расход (м²/л)
- `wallpaper.ts` — обои: периметр, высота, ширина рулона, длина рулона, раппорт → количество рулонов

Каждый — чистая функция `calculate(input)` + типы. UI-обёртки в `src/components/calculators/*Calculator.tsx`, общий `<ResultRow>` выносим в `src/components/calculators/ResultRow.tsx`.

Вкладки через `@/components/ui/tabs`.

## Стиль (индустриальный тёмный)

Обновляем `src/styles.css` — токены в oklch:
- `--background`: глубокий графит (#0f1115)
- `--card`/`--secondary`: тон выше (#1a1d24)
- `--foreground`: светло-серый (#e5e7eb)
- `--primary`: янтарный (#f59e0b), `--primary-foreground` тёмный
- `--muted-foreground`, `--border` — приглушённые серые
- `--gradient-hero`: радиальный от primary к фону
- `--shadow-elegant`: мягкая тень с янтарным оттенком
- Subtle «blueprint»-сетка как `background-image` у hero через CSS (linear-gradient)

Только семантические токены в компонентах — никаких хардкод-цветов.

Шрифт — оставляем системный sans, заголовки крупные, uppercase tracking-wide для секций.

## Обучение

Контент держим в `src/data/articles.ts` (массив `{slug, title, excerpt, formula, body}`). Рендерим карточками; раскрытие — через `<Accordion>` или модалку (`<Dialog>`). Внутри — формула моноширинным, краткий текст. Без отдельных маршрутов.

## Гаджет

Секция с двумя колонками: слева текст + список фич (3 пункта, иконки lucide), справа — стилизованный плейсхолдер-карточка (CSS-арт или сгенерированное изображение через imagegen, тёмный фон + неоновая подсветка). CTA «Оставить заявку» → `toast.success("Спасибо, мы напишем")` через `sonner`.

## Магазин

- Hero-блок секции с заголовком «Магазин стройматериалов»
- Сетка из 4–6 карточек категорий (иконка lucide + название + короткое описание)
- Блок контактов: адрес-плейсхолдер, телефон, часы

Без корзины и платежей.

## SEO

В `head()` главного маршрута: title «Стройкалькулятор — расчёт материалов, обучение, магазин», meta description, единственный H1 в hero. Alt-тексты на всех картинках.

## Файлы

Создаём:
- `src/lib/calculators/screed.ts`, `plaster.ts`, `paint.ts`, `wallpaper.ts`
- `src/lib/calculators/index.ts` (ре-экспорт + общие хелперы round)
- `src/components/calculators/ResultRow.tsx`
- `src/components/calculators/ScreedCalculator.tsx`, `PlasterCalculator.tsx`, `PaintCalculator.tsx`, `WallpaperCalculator.tsx`
- `src/components/sections/Hero.tsx`, `CalculatorsSection.tsx`, `LearnSection.tsx`, `GadgetSection.tsx`, `ShopSection.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`
- `src/data/articles.ts`
- `src/assets/gadget.jpg` (через imagegen, indus dark)

Меняем:
- `src/lib/masonry.ts` → переезжает в `src/lib/calculators/masonry.ts` (обновляем импорт в `MasonryCalculator.tsx`)
- `src/components/MasonryCalculator.tsx` → переезжает в `src/components/calculators/MasonryCalculator.tsx`, использует общий `ResultRow`
- `src/styles.css` — новая тёмная палитра + градиенты/тени
- `src/routes/index.tsx` — собираем секции, SEO

Без бэкенда, без БД.
export default function Home() {
  const days = [
    {
      title: "День 1 — Верх А (Ширина + базова сила)",
      focus: "Спина/плечі в пріоритеті, помірний обсяг без перевантаження",
      exercises: [
        "Тяга верхнього блока до грудей (широкий хват) — 3x8-12 (RIR 1-2, 90-120 с)",
        "Тяга штанги/гантелей в нахилі — 3x8-10 (RIR 1-2, 90-120 с)",
        "Жим лежачи — 4x6-10 (RIR 1-2, 2 хв)",
        "Жим гантелей сидячи — 2x6-10 (RIR 1-2, 90-120 с)",
        "Махи гантелями в сторони — 2x12-15 (RIR 1, 60-75 с)",
        "Підйом штанги/гантелей на біцепс — 2x8-12 (RIR 1, 60-75 с)",
        "Розгинання рук на блоці — 2x10-12 (RIR 1, 60-75 с)",
      ],
    },
    {
      title: "День 2 — Низ А (Сила + база)",
      focus: "Квадрицепс/задня поверхня + литки, компактний обсяг",
      exercises: [
        "Гакк-присідання або фронтальні присідання — 3x6-10 (RIR 1-2, 2 хв)",
        "Румунська тяга — 3x8-10 (RIR 1-2, 2 хв)",
        "Розгинання ніг у тренажері — 2x12-15 (RIR 1, 75 с)",
        "Підйоми на литки стоячи — 4x12-20 (пауза 1-2 с вгорі)",
        "Планка або підйом ніг у висі — 3 підходи",
      ],
    },
    {
      title: "День 3 — Верх Б (Об'єм + деталізація)",
      focus: "Другий стимул на спину/плечі + стабільний обсяг на руки",
      exercises: [
        "Тяга горизонтального блока (нейтральний хват) — 3x8-12 (RIR 1-2, 90 с)",
        "Тяга верхнього блока однією рукою/півколіном — 3x10-12 (RIR 1, 90 с)",
        "Жим гантелей на похилій лаві — 3x8-12 (RIR 1-2, 90 с)",
        "Жим у тренажері на груди — 3x8-12 (RIR 1-2, 90 с)",
        "Тяга до підборіддя (широким хватом) — 2x10-12 (RIR 1, 75 с)",
        "Face pull — 3x12-15 (RIR 1, 60-75 с)",
        "Махи в сторони в кросовері — 1x15-20 (RIR 0-1, 60 с)",
        "Молоткові підйоми — 2x10-12 (RIR 1, 60-75 с)",
        "Розгинання рук через голову (канат/гантель) — 2x10-12 (RIR 1, 60-75 с)",
      ],
    },
    {
      title: "День 4 — Низ Б (Доопрацювання + литки)",
      focus: "Другий день ніг + окремий акцент на камбаловидні м'язи",
      exercises: [
        "Жим ногами — 2x10-15 (RIR 1-2, 90 с)",
        "Згинання ніг сидячи/лежачи — 2x10-15 (RIR 1, 75-90 с)",
        "Випади з гантелями — 2x10-12/нога (RIR 1, 90 с)",
        "Підйоми на литки сидячи — 1x15-20 (пауза 1-2 с вгорі)",
        "Dead bug або Pallof press — 2-3 підходи",
      ],
    },
  ];

  const evidence = [
    "Обсяг є головним драйвером росту: у більшості випадків ефективний діапазон 10-20 робочих підходів на м'яз/тиждень.",
    "Менше 10 підходів часто дає повільніший прогрес у тренованих, але у новачків може працювати і нижчий обсяг.",
    "Понад 20 підходів може працювати у досвідчених, але часто збільшує «сміттєвий» обсяг і ризик недовідновлення.",
    "За одне тренування найчастіше доцільно тримати близько 6-10 підходів на групу і розносити великий обсяг на 2 дні.",
    "Частота 2x/тиждень на м'яз дає стабільну гіпертрофію, якщо тижневий обсяг вирівняний.",
    "Підходи близько до відмови (RIR 0-2, приблизно RPE 8-10) ефективніші за занадто «легку» роботу; не обов'язково робити відмову в кожному сеті.",
    "Робота в розтягнутій позиції (long-length emphasis) має добру доказову базу як інструмент для додаткового росту.",
    "Відпочинок 2-3 хв на базі і 60-90 с на ізоляції допомагає зберегти якість повторів.",
    "Спліт верх/низ краще масштабується під 60-70 хв і дозволяє дати більше якісного обсягу на спину/плечі, ніж класичний bro-split раз на тиждень.",
    "Для рук часто достатньо 6-10 прямих підходів/тиждень плюс непряме навантаження з тяг і жимів.",
    "Deload доцільно робити кожні 4-8 тижнів або за ознаками накопиченої втоми.",
    "Структура Upper A/Lower A/Upper B/Lower B (горизонталь/вертикаль та колінний/тазостегновий акцент) добре працює для прогресії і відновлення.",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Strength-Physique Blueprint
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            4-денна програма на набір м&apos;язів під V-форму
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            Пріоритет: широка спина + об&apos;ємні плечі, з достатнім навантаженням
            на ноги для гормонального фону та симетрії. Формат під full gym,
            60-70 хв на тренування.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-400">Вага</p>
              <p className="mt-1 text-2xl font-semibold">84.5 кг</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-400">Body score</p>
              <p className="mt-1 text-2xl font-semibold">80</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-400">Спліт</p>
              <p className="mt-1 text-2xl font-semibold">Upper / Lower</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-400">Тривалість</p>
              <p className="mt-1 text-2xl font-semibold">60-70 хв</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Чому саме так (дослідження)</h2>
        <div className="mt-5 grid gap-3">
          {evidence.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-400">
          Основа: систематичні огляди і метааналізи по обсягу/частоті/інтенсивності
          (Schoenfeld та співавт., Grgic та співавт., 2016-2022).
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Твій 4-денний план</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {days.map((day) => (
            <article
              key={day.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-300">{day.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{day.focus}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-200 sm:text-base">
                {day.exercises.map((exercise) => (
                  <li key={exercise}>- {exercise}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-14 sm:grid-cols-2 sm:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">Прогресія на 8 тижнів</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>- Тримай RIR 1-2 на базі, RIR 0-1 на ізоляції.</li>
            <li>- Коли доходиш до верхньої межі повторів — додавай 2.5-5% ваги.</li>
            <li>- Якщо 2 тренування підряд регрес: мінус 20% обсягу на 1 тиждень.</li>
            <li>- Deload кожні 4-6 тижнів: 50-60% ваг або ~50% звичного обсягу.</li>
            <li>- Кроки: 7-10 тис/день для контролю відновлення і апетиту.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">Харчування під набір</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>- Старт: +200-300 ккал до підтримки.</li>
            <li>- Білок: 1.8-2.2 г/кг маси тіла (152-186 г/добу).</li>
            <li>- Жири: 0.7-1.0 г/кг, решта калорій — вуглеводи.</li>
            <li>- Ціль: +0.2-0.4% маси/тиждень (повільний чистий набір).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

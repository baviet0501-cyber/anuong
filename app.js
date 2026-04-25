const mealKeys = ["breakfast", "lunch", "dinner"];

const mealLabels = {
  breakfast: "Bữa sáng",
  lunch: "Bữa trưa",
  dinner: "Bữa tối",
};

const mealRatios = {
  breakfast: 0.3,
  lunch: 0.4,
  dinner: 0.3,
};

const fallbackBudgets = {
  breakfast: 380,
  lunch: 520,
  dinner: 450,
};

const mealData = {
  breakfast: [
    {
      title: "Phở gạo lứt ức gà xé",
      calories: 385,
      protein: 34,
      qty: { chicken: 100, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 60, veg: 180 },
      text: "Món nước dễ ăn buổi sáng, protein cao và khá no.",
      icon: "soup",
    },
    {
      title: "Phở gạo lứt tôm trứng",
      calories: 370,
      protein: 30,
      qty: { chicken: 0, shrimp: 90, eggs: 1, riceCooked: 0, phoDry: 55, veg: 170 },
      text: "Đổi vị giữa tôm và trứng nhưng vẫn giữ lượng tinh bột rõ ràng.",
      icon: "egg",
    },
    {
      title: "Cơm gạo lứt ức gà áp chảo",
      calories: 430,
      protein: 37,
      qty: { chicken: 110, shrimp: 0, eggs: 0, riceCooked: 130, phoDry: 0, veg: 180 },
      text: "Hợp ngày cần bữa sáng chắc bụng hơn.",
      icon: "drumstick",
    },
    {
      title: "Cơm gạo lứt tôm và trứng",
      calories: 415,
      protein: 30,
      qty: { chicken: 0, shrimp: 90, eggs: 1, riceCooked: 120, phoDry: 0, veg: 170 },
      text: "Dễ meal prep vì luộc tôm và trứng trước được.",
      icon: "utensils",
    },
    {
      title: "Ức gà xé trộn phở gạo lứt khô",
      calories: 360,
      protein: 31,
      qty: { chicken: 90, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 50, veg: 160 },
      text: "Ăn khô giúp kiểm soát gia vị và dầu dễ hơn.",
      icon: "chef-hat",
    },
    {
      title: "Trứng gà và gạo lứt phần nhẹ",
      calories: 340,
      protein: 19,
      qty: { chicken: 0, shrimp: 0, eggs: 2, riceCooked: 110, phoDry: 0, veg: 160 },
      text: "Rất nhanh, phù hợp sáng cần nấu gọn.",
      icon: "egg",
    },
    {
      title: "Tôm áp chảo với gạo lứt",
      calories: 395,
      protein: 31,
      qty: { chicken: 0, shrimp: 100, eggs: 0, riceCooked: 120, phoDry: 0, veg: 170 },
      text: "Nhiều đạm nhưng vẫn nhẹ nếu dùng ít dầu.",
      icon: "utensils",
    },
    {
      title: "Phở gạo lứt 2 trứng",
      calories: 345,
      protein: 22,
      qty: { chicken: 0, shrimp: 0, eggs: 2, riceCooked: 0, phoDry: 50, veg: 170 },
      text: "Lựa chọn nhẹ hơn cho ngày mục tiêu calo thấp.",
      icon: "soup",
    },
  ],
  lunch: [
    {
      title: "Cơm gạo lứt ức gà áp chảo",
      calories: 560,
      protein: 47,
      qty: { chicken: 140, shrimp: 0, eggs: 0, riceCooked: 170, phoDry: 0, veg: 220 },
      text: "Món nền dễ bám kế hoạch giảm cân.",
      icon: "drumstick",
    },
    {
      title: "Cơm gạo lứt tôm rang nhạt",
      calories: 530,
      protein: 40,
      qty: { chicken: 0, shrimp: 140, eggs: 0, riceCooked: 160, phoDry: 0, veg: 220 },
      text: "Hương vị quen nhưng vẫn kiểm soát calo tốt.",
      icon: "utensils",
    },
    {
      title: "Phở gạo lứt ức gà nước",
      calories: 505,
      protein: 44,
      qty: { chicken: 130, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 70, veg: 220 },
      text: "Hợp khi trưa muốn món nước thay cơm.",
      icon: "soup",
    },
    {
      title: "Phở gạo lứt tôm trứng",
      calories: 520,
      protein: 38,
      qty: { chicken: 0, shrimp: 120, eggs: 1, riceCooked: 0, phoDry: 65, veg: 220 },
      text: "Đổi vị nhưng vẫn đủ đạm rõ ràng.",
      icon: "egg",
    },
    {
      title: "Cơm gạo lứt gà xé và trứng",
      calories: 545,
      protein: 44,
      qty: { chicken: 120, shrimp: 0, eggs: 1, riceCooked: 150, phoDry: 0, veg: 220 },
      text: "Rất hợp để chuẩn bị sẵn cho 2-3 bữa.",
      icon: "egg",
    },
    {
      title: "Cơm gạo lứt gà và tôm",
      calories: 570,
      protein: 50,
      qty: { chicken: 90, shrimp: 80, eggs: 0, riceCooked: 150, phoDry: 0, veg: 220 },
      text: "Đạm cao hơn cho ngày vận động nhiều.",
      icon: "chef-hat",
    },
    {
      title: "Phở gạo lứt xào khô ức gà",
      calories: 540,
      protein: 44,
      qty: { chicken: 120, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 65, veg: 200 },
      text: "Điểm quan trọng là giữ dầu thấp.",
      icon: "chef-hat",
    },
    {
      title: "Tôm áp chảo và phở gạo lứt",
      calories: 490,
      protein: 36,
      qty: { chicken: 0, shrimp: 120, eggs: 0, riceCooked: 0, phoDry: 60, veg: 200 },
      text: "Bữa trưa nhanh, ít công chuẩn bị.",
      icon: "utensils",
    },
  ],
  dinner: [
    {
      title: "Phở gạo lứt ức gà tô nhỏ",
      calories: 445,
      protein: 39,
      qty: { chicken: 110, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 55, veg: 200 },
      text: "Nhẹ hơn cơm nhưng vẫn khá no.",
      icon: "soup",
    },
    {
      title: "Cơm gạo lứt tôm luộc",
      calories: 455,
      protein: 35,
      qty: { chicken: 0, shrimp: 120, eggs: 0, riceCooked: 130, phoDry: 0, veg: 220 },
      text: "Ít dầu nên dễ giữ tổng calo trong ngày.",
      icon: "utensils",
    },
    {
      title: "Trứng hấp với ức gà và gạo lứt",
      calories: 435,
      protein: 36,
      qty: { chicken: 80, shrimp: 0, eggs: 2, riceCooked: 110, phoDry: 0, veg: 200 },
      text: "Mềm và dễ ăn cho bữa tối.",
      icon: "egg",
    },
    {
      title: "Cơm gạo lứt ức gà luộc",
      calories: 460,
      protein: 43,
      qty: { chicken: 120, shrimp: 0, eggs: 0, riceCooked: 120, phoDry: 0, veg: 220 },
      text: "Món cơ bản nhưng rất ổn định cho giảm cân.",
      icon: "drumstick",
    },
    {
      title: "Phở gạo lứt tôm tô nhẹ",
      calories: 425,
      protein: 33,
      qty: { chicken: 0, shrimp: 110, eggs: 0, riceCooked: 0, phoDry: 50, veg: 200 },
      text: "Phù hợp tối không muốn ăn cơm.",
      icon: "soup",
    },
    {
      title: "Cơm gạo lứt và trứng luộc",
      calories: 405,
      protein: 23,
      qty: { chicken: 0, shrimp: 0, eggs: 2, riceCooked: 110, phoDry: 0, veg: 200 },
      text: "Phương án tối giản khi bận.",
      icon: "egg",
    },
    {
      title: "Gà xé trộn phở gạo lứt",
      calories: 470,
      protein: 41,
      qty: { chicken: 110, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 55, veg: 200 },
      text: "Ăn khô hoặc chan ít nước đều được.",
      icon: "chef-hat",
    },
    {
      title: "Tôm, trứng và gạo lứt",
      calories: 440,
      protein: 32,
      qty: { chicken: 0, shrimp: 90, eggs: 1, riceCooked: 110, phoDry: 0, veg: 200 },
      text: "Đủ đạm nhưng không quá nặng bụng.",
      icon: "egg",
    },
  ],
  snack: [
    {
      title: "1 trứng gà luộc",
      calories: 95,
      protein: 6,
      qty: { chicken: 0, shrimp: 0, eggs: 1, riceCooked: 0, phoDry: 0, veg: 100 },
      text: "Bữa phụ nhẹ để chống đói.",
      icon: "egg",
    },
    {
      title: "Tôm luộc phần nhỏ",
      calories: 120,
      protein: 19,
      qty: { chicken: 0, shrimp: 80, eggs: 0, riceCooked: 0, phoDry: 0, veg: 100 },
      text: "Nhiều đạm, hợp khi bữa chính hơi thiếu protein.",
      icon: "utensils",
    },
    {
      title: "Ức gà xé phần nhỏ",
      calories: 145,
      protein: 25,
      qty: { chicken: 80, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 0, veg: 100 },
      text: "Rất tiện nếu meal prep trước.",
      icon: "drumstick",
    },
    {
      title: "Gạo lứt và 1 trứng",
      calories: 190,
      protein: 9,
      qty: { chicken: 0, shrimp: 0, eggs: 1, riceCooked: 80, phoDry: 0, veg: 80 },
      text: "Dùng khi cần thêm chút tinh bột.",
      icon: "wheat",
    },
    {
      title: "Phở gạo lứt nửa phần với trứng",
      calories: 175,
      protein: 12,
      qty: { chicken: 0, shrimp: 0, eggs: 1, riceCooked: 0, phoDry: 35, veg: 80 },
      text: "Món nước nhẹ cho giữa buổi.",
      icon: "soup",
    },
    {
      title: "Phở gạo lứt nửa phần với ức gà",
      calories: 190,
      protein: 17,
      qty: { chicken: 60, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 30, veg: 80 },
      text: "Nhẹ hơn bữa chính nhưng vẫn khá no.",
      icon: "soup",
    },
    {
      title: "Gạo lứt và tôm phần nhỏ",
      calories: 180,
      protein: 16,
      qty: { chicken: 0, shrimp: 60, eggs: 0, riceCooked: 70, phoDry: 0, veg: 80 },
      text: "Cân bằng hơn nếu bạn vận động nhiều hơn thường ngày.",
      icon: "wheat",
    },
    {
      title: "1 trứng và ức gà phần nhỏ",
      calories: 175,
      protein: 20,
      qty: { chicken: 60, shrimp: 0, eggs: 1, riceCooked: 0, phoDry: 0, veg: 80 },
      text: "Tăng protein mà không cần thêm tinh bột.",
      icon: "egg",
    },
  ],
};

let selectedDeficit = 300;
let currentTargetCalories = 0;
let currentMaintenanceCalories = 0;
let outsideMealKey = "";
let outsideMealCalories = 0;
let outsideRemainingMealCount = 2;
let lastPlanSignature = "";

const numberFormat = new Intl.NumberFormat("vi-VN");

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function getValue(id) {
  return document.getElementById(id).value;
}

function formatCalories(value) {
  return `${numberFormat.format(Math.round(value))} kcal`;
}

function getDeficitName() {
  return selectedDeficit === 300 ? "giảm nhẹ" : "giảm vừa";
}

function formatQuantity(item) {
  const parts = [];

  if (item.qty.chicken) {
    parts.push(`Ức gà ${item.qty.chicken} g`);
  }
  if (item.qty.shrimp) {
    parts.push(`Tôm ${item.qty.shrimp} g`);
  }
  if (item.qty.eggs) {
    parts.push(`Trứng gà ${item.qty.eggs} quả (~${item.qty.eggs * 50} g)`);
  }
  if (item.qty.riceCooked) {
    parts.push(`Gạo lứt chín ${item.qty.riceCooked} g`);
  }
  if (item.qty.phoDry) {
    parts.push(`Phở gạo lứt khô ${item.qty.phoDry} g`);
  }
  parts.push(`Rau ${item.qty.veg} g`);

  return parts.join(" • ");
}

function getCarbBadge(item) {
  if (item.qty.riceCooked) {
    return `Gạo lứt ${item.qty.riceCooked} g`;
  }
  if (item.qty.phoDry) {
    return `Phở khô ${item.qty.phoDry} g`;
  }
  return "Tinh bột rất thấp";
}

function getPlanSignature(plan) {
  return plan.items.map((item) => `${item.mealKey}:${item.title}:${item.calories}`).join("|");
}

function shuffle(items) {
  const copied = [...items];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[swapIndex]] = [copied[swapIndex], copied[index]];
  }
  return copied;
}

function getMealBudget(mealKey, targetForDay = currentTargetCalories) {
  if (!targetForDay) {
    return fallbackBudgets[mealKey];
  }
  return Math.round((targetForDay * mealRatios[mealKey]) / 10) * 10;
}

function pickForBudget(mealKey, budget) {
  const candidates = mealData[mealKey]
    .map((item) => ({
      ...item,
      score: Math.abs(item.calories - budget),
    }))
    .sort((first, second) => first.score - second.score)
    .slice(0, 5);

  const biasedIndex = Math.floor(Math.pow(Math.random(), 1.35) * candidates.length);
  return candidates[Math.min(biasedIndex, candidates.length - 1)];
}

function getOutsideMealFromForm() {
  const mealKey = getValue("outsideMeal");
  const calories = Number(getValue("outsideCalories"));
  const remainingCount = Number(getValue("outsideRemainingMeals")) || 2;

  if (!mealKey || !calories || calories <= 0) {
    return null;
  }

  return {
    mealKey,
    calories: Math.round(calories),
    remainingCount: Math.min(Math.max(remainingCount, 1), 2),
  };
}

function chooseRemainingMealSlots(outsideMeal, count) {
  const remainingMeals = mealKeys.filter((mealKey) => mealKey !== outsideMeal);

  if (count >= remainingMeals.length) {
    return remainingMeals;
  }

  const preferences = {
    breakfast: ["lunch", "dinner"],
    lunch: ["dinner", "breakfast"],
    dinner: ["lunch", "breakfast"],
  };

  return preferences[outsideMeal]
    .filter((mealKey) => remainingMeals.includes(mealKey))
    .slice(0, count);
}

function getPlanBudgets() {
  const budgetMap = {};
  const outside = outsideMealKey && outsideMealCalories > 0
    ? {
        mealKey: outsideMealKey,
        calories: outsideMealCalories,
        remainingCount: outsideRemainingMealCount,
      }
    : null;

  if (!outside) {
    mealKeys.forEach((mealKey) => {
      budgetMap[mealKey] = getMealBudget(mealKey, currentTargetCalories);
    });
    return { budgetMap, outside, activeMealKeys: mealKeys };
  }

  const selectedRemainingMeals = chooseRemainingMealSlots(
    outside.mealKey,
    outside.remainingCount,
  );
  const activeMealKeys = mealKeys.filter(
    (mealKey) => mealKey === outside.mealKey || selectedRemainingMeals.includes(mealKey),
  );
  const remainingCalories = Math.max(0, currentTargetCalories - outside.calories);
  const ratioSum = selectedRemainingMeals.reduce(
    (sum, mealKey) => sum + mealRatios[mealKey],
    0,
  );

  activeMealKeys.forEach((mealKey) => {
    if (mealKey === outside.mealKey) {
      budgetMap[mealKey] = outside.calories;
    } else {
      const ratio = mealRatios[mealKey] / ratioSum;
      budgetMap[mealKey] = Math.round((remainingCalories * ratio) / 10) * 10;
    }
  });

  return { budgetMap, outside, activeMealKeys };
}

function createDailyPlan(forceDifferent = false) {
  const { budgetMap, outside, activeMealKeys } = getPlanBudgets();
  const candidatePlans = [];

  for (let attempt = 0; attempt < 80; attempt += 1) {
    const items = activeMealKeys.map((mealKey) => {
      if (outside && mealKey === outside.mealKey) {
        return {
          mealKey,
          title: "Bữa ăn ngoài",
          calories: outside.calories,
          protein: 0,
          qty: { chicken: 0, shrimp: 0, eggs: 0, riceCooked: 0, phoDry: 0, veg: 0 },
          text: "Bạn tự nhập. Web đã tự cân lại các bữa còn lại.",
          icon: "store",
          isOutside: true,
        };
      }

      return {
        mealKey,
        ...pickForBudget(mealKey, budgetMap[mealKey]),
      };
    });

    const total = items.reduce((sum, item) => sum + item.calories, 0);
    const protein = items.reduce((sum, item) => sum + item.protein, 0);
    const score = Math.abs(total - currentTargetCalories);

    candidatePlans.push({ items, total, protein, score, budgetMap, outside, activeMealKeys });
  }

  candidatePlans.sort((first, second) => first.score - second.score);

  const bestScore = candidatePlans[0].score;
  const pool = candidatePlans
    .filter((plan) => plan.score <= bestScore + 140)
    .slice(0, 10);
  const shuffledPool = shuffle(pool);

  if (forceDifferent) {
    const differentPlan = shuffledPool.find((plan) => getPlanSignature(plan) !== lastPlanSignature);
    if (differentPlan) {
      return differentPlan;
    }
  }

  return shuffledPool[0] || candidatePlans[0];
}

function getAdjustmentAdvice(difference) {
  if (Math.abs(difference) <= 80) {
    return "Tổng này rất sát mục tiêu, giữ đúng gram như gợi ý là ổn.";
  }

  if (difference < 0) {
    const gap = Math.abs(difference);
    const addOns =
      gap > 350
        ? "thêm ức gà +60 g hoặc tôm +80 g, tăng gạo lứt chín +80 g (hoặc phở khô +30 g), và rau +80 g"
        : "thêm 1 trứng hoặc ức gà +40 g, tăng gạo lứt chín +40 g (hoặc phở khô +15 g), và rau +50 g";

    return `Tổng này thấp hơn mục tiêu khoảng ${formatCalories(gap)}. Có thể ${addOns}.`;
  }

  return `Tổng này cao hơn mục tiêu khoảng ${formatCalories(
    difference,
  )}. Có thể giảm gạo lứt chín 40-80 g (hoặc phở khô 15-30 g), giảm dầu và giữ rau như cũ.`;
}

function renderCalorieAdvice(target, weight) {
  const carbGuide =
    target <= 1400
      ? "Bữa chính: gạo lứt chín 100-130 g hoặc phở gạo lứt khô 45-55 g."
      : target <= 1700
        ? "Bữa chính: gạo lứt chín 130-170 g hoặc phở gạo lứt khô 55-70 g."
        : "Bữa chính: gạo lứt chín 170-220 g hoặc phở gạo lứt khô 70-85 g.";
  const veggieGuide = "Rau: 150-220 g mỗi bữa chính.";
  const proteinGuide = `Thịt/đạm: ức gà hoặc tôm khoảng 100-140 g mỗi bữa chính. Protein tham khảo theo cân nặng hiện tại: ${Math.round(
    weight * 1.2,
  )}-${Math.round(weight * 1.6)} g/ngày.`;
  const flexibleGuide =
    "Nếu đã ăn ngoài một bữa, chỉ chọn ăn thêm 1 hoặc 2 bữa chính còn lại để giữ calo hợp lý.";

  document.getElementById("calorieAdvice").innerHTML = [
    { icon: "wheat", text: carbGuide },
    { icon: "drumstick", text: proteinGuide },
    { icon: "salad", text: veggieGuide },
    { icon: "calendar-clock", text: flexibleGuide },
  ]
    .map(
      (item) => `
        <div class="advice-row">
          <i data-lucide="${item.icon}" aria-hidden="true"></i>
          <span>${item.text}</span>
        </div>
      `,
    )
    .join("");

  refreshIcons();
}

function renderFlexibleSummary(plan) {
  const box = document.getElementById("flexibleSummary");

  if (!plan.outside) {
    box.textContent =
      "Chưa có bữa ăn ngoài. Kế hoạch hiện dùng 3 bữa chính và không có bữa phụ.";
    return;
  }

  const remaining = Math.max(0, currentTargetCalories - plan.outside.calories);
  const extraMealCount = plan.activeMealKeys.length - 1;
  box.textContent = `Đã áp dụng bữa ăn ngoài cho ${
    mealLabels[plan.outside.mealKey]
  }: ${formatCalories(plan.outside.calories)}. Web chỉ gợi ý thêm ${extraMealCount} bữa nữa, tổng calo còn lại: ${formatCalories(remaining)}.`;
}

function renderDailyPlan(options = {}) {
  if (!currentTargetCalories) {
    return;
  }

  const plan = createDailyPlan(options.forceDifferent);
  const dailyPlan = document.getElementById("dailyPlan");
  const planSummary = document.getElementById("planSummary");
  const difference = plan.total - currentTargetCalories;
  const adjustmentAdvice = getAdjustmentAdvice(difference);

  dailyPlan.innerHTML = plan.items
    .map((item) => {
      if (item.isOutside) {
        return `
          <article class="daily-card outside-card">
            <header>
              <div>
                <span class="meal-name">${mealLabels[item.mealKey]}</span>
                <h3>${item.title}</h3>
              </div>
              <span class="kcal-pill">${item.calories} kcal</span>
            </header>
            <p class="portion">Bạn đã nhập calo bữa này thủ công.</p>
            <div class="food-meta">
              <span>Ăn ngoài</span>
              <span>Giữ cố định</span>
            </div>
            <p class="food-tip">${item.text}</p>
          </article>
        `;
      }

      return `
        <article class="daily-card">
          <header>
            <div>
              <span class="meal-name">${mealLabels[item.mealKey]}</span>
              <h3>${item.title}</h3>
            </div>
            <span class="kcal-pill">${item.calories} kcal</span>
          </header>
          <p class="portion">${formatQuantity(item)}</p>
          <div class="food-meta">
            <span>${item.protein} g protein</span>
            <span>${getCarbBadge(item)}</span>
            <span>Mục tiêu bữa: ${plan.budgetMap[item.mealKey]} kcal</span>
          </div>
          <p class="food-tip">${item.text}</p>
        </article>
      `;
    })
    .join("");

  planSummary.textContent = `Tổng ngày khoảng ${formatCalories(
    plan.total,
  )}, protein khoảng ${plan.protein} g. ${adjustmentAdvice}`;

  renderFlexibleSummary(plan);
  lastPlanSignature = getPlanSignature(plan);
  refreshIcons();
}

function calculateCalories() {
  const sex = getValue("sex");
  const age = Number(getValue("age"));
  const height = Number(getValue("height"));
  const weight = Number(getValue("weight"));
  const activity = Number(getValue("activity"));

  if (!age || !height || !weight || !activity) {
    return;
  }

  const base = 10 * weight + 6.25 * height - 5 * age;
  const bmr = sex === "male" ? base + 5 : base - 161;
  const maintenance = Math.round(bmr * activity);
  const minimumGuideline = sex === "male" ? 1500 : 1200;
  const target = Math.max(0, maintenance - selectedDeficit);
  const proteinLow = Math.round(weight * 1.2);
  const proteinHigh = Math.round(weight * 1.6);
  const lowCalorieNote =
    target < minimumGuideline
      ? ` Mức này thấp hơn ngưỡng tham khảo ${formatCalories(
          minimumGuideline,
        )}, nên cân nhắc chọn giảm nhẹ hoặc tăng vận động.`
      : "";

  currentTargetCalories = target;
  currentMaintenanceCalories = maintenance;

  document.getElementById("targetCalories").textContent = formatCalories(target);
  document.getElementById(
    "macroNote",
  ).textContent = `Duy trì khoảng ${formatCalories(
    currentMaintenanceCalories,
  )}. Đang chọn ${getDeficitName()}: ${formatCalories(
    currentMaintenanceCalories,
  )} - ${selectedDeficit} = ${formatCalories(
    target,
  )}. Protein tham khảo: ${proteinLow}-${proteinHigh} g/ngày.${lowCalorieNote}`;

  renderCalorieAdvice(target, weight);
  renderDailyPlan();
}

function applyOutsideMeal() {
  const outside = getOutsideMealFromForm();

  if (!outside) {
    outsideMealKey = "";
    outsideMealCalories = 0;
    outsideRemainingMealCount = 2;
  } else {
    outsideMealKey = outside.mealKey;
    outsideMealCalories = outside.calories;
    outsideRemainingMealCount = outside.remainingCount;
  }

  renderDailyPlan({ forceDifferent: true });
}

function resetOutsideMeal() {
  outsideMealKey = "";
  outsideMealCalories = 0;
  outsideRemainingMealCount = 2;
  document.getElementById("outsideMeal").value = "";
  document.getElementById("outsideCalories").value = "";
  document.getElementById("outsideRemainingMeals").value = "2";
  renderDailyPlan({ forceDifferent: true });
}

document.getElementById("tinh-calo").addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelectorAll("input, select").forEach((field) => {
  if (
    field.id === "outsideCalories" ||
    field.id === "outsideMeal" ||
    field.id === "outsideRemainingMeals"
  ) {
    return;
  }
  field.addEventListener("input", calculateCalories);
  field.addEventListener("change", calculateCalories);
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((segment) => {
      segment.classList.remove("active");
      segment.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    selectedDeficit = Number(button.dataset.deficit);
    calculateCalories();
  });
});

document.getElementById("applyFlexible").addEventListener("click", applyOutsideMeal);
document.getElementById("resetFlexible").addEventListener("click", resetOutsideMeal);

document.getElementById("generatePlan").addEventListener("click", () => {
  renderDailyPlan({ forceDifferent: true });
  document.getElementById("thuc-don").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("shuffleDay").addEventListener("click", () => {
  renderDailyPlan({ forceDifferent: true });
});

window.addEventListener("DOMContentLoaded", () => {
  refreshIcons();
  calculateCalories();
});

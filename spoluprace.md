---
layout: default
title: Spolupráce
---

<section class="py-12">
  <div class="max-w-lg mx-auto px-4 text-4xl">
    Děkujeme za spolupráci
  </div>
</section>

<section class="pb-32">

  <div class="max-w-lg mx-auto px-4">
    {% for item in site.data.collaborations %}

    <p class="pb-6"><span class="text-gray-500">{{ item.profession }}</span>
      <span class="font-bold">{{ item.name }}</span>
    </p>
    {% endfor %}

  </div>
</section>

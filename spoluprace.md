---
layout: default
title: Spolupráce
---

<section>
  <div class="max-w-lg mx-auto my-10 px-4 text-2xl">
    Děkujeme za spolupráci
  </div>
</section>

<section>

  <div class="max-w-lg mx-auto my-10 px-4 pb-24">
    {% for item in site.data.collaborations %}

    <p class="pb-6"><span class="text-gray-500">{{ item.position }}</span>
      <span class="font-bold">{{ item.name }}</span>
    </p>
    {% endfor %}

  </div>
</section>

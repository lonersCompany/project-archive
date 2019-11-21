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
  <div class="max-w-lg mx-auto my-10 px-4">
    {% for colaboration in
    site.data.information.colaborations %}
    <ul>
      <li class="text-lg">
        {{ colaboration }}
      </li>
    </ul>

    {% endfor %}

  </div>
</section>

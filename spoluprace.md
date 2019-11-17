---
layout: default
title: Spolupráce
---

<section>
  <div class="max-w-lg mx-auto my-10 px-4">
    {%- include label-hr.html content="spolupráce" -%} {% for colaboration in
    site.data.information.colaborations %}
    <ul class="mb-5">
      <li>
        {{ colaboration }}
      </li>
    </ul>

    {% endfor %}

  </div>
</section>

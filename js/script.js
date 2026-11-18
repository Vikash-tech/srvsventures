
    // ===== EDIT THESE =====
    const WA = "919987680823"; // WhatsApp number with country code, no +
    const P = [
      {
        id: 1,
        n: "Name Keychain",
        c: "Keychains",
        e: "🔑",
        p: 149,
        o: 199,
        f: [
          ["Name / text", "text", "Max 15 characters"],
          ["Colour", "sel", "Gold,Silver,Rose Gold,Black"],
        ],
        img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 2,
        n: "Engraved Wooden Keychain",
        c: "Keychains",
        e: "🪵",
        p: 179,
        o: 249,
        f: [
          ["Name / text", "text", "Max 20 characters"],
          ["Shape", "sel", "Round,Heart,Rectangle"],
        ],
        img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 3,
        n: "Photo Frame",
        c: "Frames",
        e: "🖼️",
        p: 399,
        o: 549,
        f: [
          ["Photo", "note", "Send photo on WhatsApp after ordering"],
          ["Caption", "text", "Optional caption"],
          ["Size", "sel", "6x8 in,8x10 in,10x12 in"],
        ],
        img: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 4,
        n: "Customized Mug",
        c: "Mugs",
        e: "☕",
        p: 299,
        o: 399,
        f: [
          ["Name / text", "text", "Name or message"],
          ["Photo", "note", "Send photo on WhatsApp (optional)"],
        ],
        img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 5,
        n: "Magic Colour Mug",
        c: "Mugs",
        e: "🌈",
        p: 379,
        o: 499,
        f: [
          ["Name / text", "text", "Name or message"],
          ["Photo", "note", "Photo reveals on hot drink"],
        ],
        img: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 6,
        n: "Personalized Cushion",
        c: "Home",
        e: "🛋️",
        p: 449,
        o: 599,
        f: [
          ["Name / text", "text", "Name or message"],
          ["Colour", "sel", "White,Red,Blue,Pink"],
        ],
        img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 7,
        n: "Name Pendant / Chain",
        c: "Jewellery",
        e: "📿",
        p: 249,
        o: 349,
        f: [
          ["Name / text", "text", "Max 12 characters"],
          ["Finish", "sel", "Gold,Silver,Rose Gold"],
        ],
        img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 8,
        n: "Hair Accessories Combo",
        c: "Jewellery",
        e: "🎀",
        p: 199,
        o: 299,
        f: [
          ["Colour theme", "sel", "Pastel,Bright,Black & Gold"],
          ["Note", "text", "Any special request"],
        ],
        img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 9,
        n: "LED Name Lamp",
        c: "Home",
        e: "💡",
        p: 549,
        o: 749,
        f: [
          ["Name / text", "text", "Max 10 characters"],
          ["Light", "sel", "Warm,Cool White,RGB"],
        ],
        img: "https://images.unsplash.com/photo-1507494924047-60b8aa7f7d5a?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 10,
        n: "Couple Gift Hamper",
        c: "Hampers",
        e: "💝",
        p: 899,
        o: 1199,
        f: [
          ["Names", "text", "e.g. Ravi & Sneha"],
          ["Occasion", "sel", "Anniversary,Birthday,Wedding,Valentine"],
        ],
        img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 11,
        n: "Corporate Gift Set",
        c: "Hampers",
        e: "🎁",
        p: 699,
        o: 899,
        f: [
          ["Company / name", "text", "Printed on items"],
          ["Note", "text", "Logo sent on WhatsApp"],
        ],
        img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600&q=80&auto=format&fit=crop",
      },
      {
        id: 12,
        n: "Festive Diya Set",
        c: "Festive",
        e: "🪔",
        p: 299,
        o: 399,
        f: [
          ["Name / text", "text", "Optional name tag"],
          ["Pack", "sel", "Set of 7,Set of 11,Set of 21"],
        ],
        img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80&auto=format&fit=crop",
      },
    ];
    // ======================

    const $ = (s) => document.querySelector(s);
    const rs = (n) => "₹" + n.toLocaleString("en-IN");
    let cart = [];
    let cat = "All";
    let cur = null;
    let occ = "";
    let q = "";
    let srt = () => 0;

    const OCC = {
      Birthday: [1, 4, 5, 6, 7],
      Anniversary: [3, 6, 9, 10],
      Wedding: [3, 7, 10],
      Corporate: [1, 4, 11],
      Kids: [4, 5, 8],
      Festive: [10, 12],
    };

    const pal = [
      ["#b2dfdb", "#4db6ac"],
      ["#ffe082", "#ffca28"],
      ["#b3e5fc", "#4fc3f7"],
      ["#c8e6c9", "#81c784"],
      ["#ffcc80", "#ffa726"],
      ["#b2ebf2", "#26c6da"],
    ];

    // Use real image if provided, else fallback to SVG
    function art(p) {
      if (p.img) {
        return `<img src="${p.img}" alt="${p.n}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <svg viewBox="0 0 200 200" style="display:none" role="img" aria-label="${p.n}">
                  <defs>
                    <linearGradient id="g${p.id}" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stop-color="${pal[p.id % 6][0]}"/>
                      <stop offset="1" stop-color="${pal[p.id % 6][1]}"/>
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#g${p.id})"/>
                  <circle cx="170" cy="30" r="45" fill="#fff" opacity=".25"/>
                  <circle cx="25" cy="175" r="55" fill="#fff" opacity=".2"/>
                  <ellipse cx="100" cy="160" rx="55" ry="9" fill="#000" opacity=".12"/>
                  <text x="100" y="125" font-size="84" text-anchor="middle">${p.e}</text>
                  <path d="M80 28l20 14 20-14-8 22h-24z" fill="#fff" opacity=".75"/>
                </svg>`;
      }
      const c = pal[p.id % 6];
      return `<svg viewBox="0 0 200 200" role="img" aria-label="${p.n}">
                <defs>
                  <linearGradient id="g${p.id}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="${c[0]}"/>
                    <stop offset="1" stop-color="${c[1]}"/>
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#g${p.id})"/>
                <circle cx="170" cy="30" r="45" fill="#fff" opacity=".25"/>
                <circle cx="25" cy="175" r="55" fill="#fff" opacity=".2"/>
                <ellipse cx="100" cy="160" rx="55" ry="9" fill="#000" opacity=".12"/>
                <text x="100" y="125" font-size="84" text-anchor="middle">${p.e}</text>
                <path d="M80 28l20 14 20-14-8 22h-24z" fill="#fff" opacity=".75"/>
              </svg>`;
    }

    try {
      cart = JSON.parse(localStorage.getItem("srvs_cart") || "[]");
    } catch (e) {}
    const save = () => {
      try {
        localStorage.setItem("srvs_cart", JSON.stringify(cart));
      } catch (e) {}
    };
    const wl = (t) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(t);

    $("#wa").href = wl("Hi SRVS Ventures, I want to know about customized gifts.");
    $(".ph").textContent = "+" + WA.slice(0, 2) + " " + WA.slice(2);
    $("#yr").textContent = new Date().getFullYear();

    function chips() {
      const cs = ["All", ...new Set(P.map((p) => p.c))];
      $("#chips").innerHTML = cs
        .map(
          (c) =>
            `<button class="chip ${c == cat ? "on" : ""}" data-c="${c}">${c}</button>`
        )
        .join("");
    }

    function grid() {
      $("#grid").innerHTML = P.filter(
        (p) =>
          (cat == "All" || p.c == cat) &&
          (!occ || OCC[occ].includes(p.id)) &&
          p.n.toLowerCase().includes(q)
      )
        .sort(srt)
        .map(
          (p) => `
          <div class="card">
            <div class="pic">
              ${p.id % 3 == 1 ? '<span class="badge">Bestseller</span>' : ""}
              ${art(p)}
            </div>
            <div class="cb">
              <span class="tag">${p.c}</span>
              <h3>${p.n}</h3>
              <div class="pr">${rs(p.p)}<s>${rs(p.o)}</s></div>
              <button class="btn" data-id="${p.id}">Customize &amp; Add</button>
            </div>
          </div>`
        )
        .join("");
    }

    $("#chips").onclick = (e) => {
      if (e.target.dataset.c) {
        cat = e.target.dataset.c;
        chips();
        grid();
      }
    };

    $("#grid").onclick = (e) => {
      const id = e.target.dataset.id;
      if (!id) return;
      cur = P.find((p) => p.id == id);
      $("#pc").textContent = cur.c;
      $("#pt").textContent = cur.n;
      $("#pp").textContent = rs(cur.p);
      $("#pe").innerHTML = art(cur);
      $("#pq").value = 1;
      $("#pv").textContent = "Your text here";
      $("#pf").innerHTML = cur.f
        .map((f, i) =>
          f[1] == "sel"
            ? `<label>${f[0]}</label><select data-i="${i}">${f[2]
                .split(",")
                .map((o) => `<option>${o}</option>`)
                .join("")}</select>`
            : f[1] == "note"
            ? `<label>${f[0]}</label><div style="font-size:13px;color:var(--mu)">${f[2]}</div>`
            : `<label>${f[0]}</label><input data-i="${i}" data-t="1" placeholder="${f[2]}" maxlength="40">`
        )
        .join("");
      $("#pm").classList.add("on");
    };

    $("#pf").oninput = (e) => {
      if (e.target.dataset.t) $("#pv").textContent = e.target.value || "Your text here";
    };

    $("#add").onclick = () => {
      const d = [];
      $("#pf").querySelectorAll("[data-i]").forEach((el) =>
        d.push(cur.f[el.dataset.i][0] + ": " + (el.value || "-"))
      );
      const qty = Math.max(1, +$("#pq").value || 1);
      cart.push({ n: cur.n, p: cur.p, q: qty, d: d.join(", ") });
      save();
      rc();
      $("#pm").classList.remove("on");
      $("#cm2").classList.add("on");
    };

    function rc() {
      $("#cc").textContent = cart.reduce((a, c) => a + c.q, 0);
      $("#cl").innerHTML = cart.length
        ? cart
            .map(
              (c, i) =>
                `<div class="row"><div><b>${c.n}</b> × ${c.q}<small>${c.d}</small></div><div>${rs(c.p * c.q)} <button class="x" data-r="${i}" style="float:none">🗑</button></div></div>`
            )
            .join("")
        : '<p class="sub">Your cart is empty.</p>';
      $("#ct").textContent = rs(cart.reduce((a, c) => a + c.p * c.q, 0));
    }

    $("#cl").onclick = (e) => {
      if (e.target.dataset.r != null) {
        cart.splice(+e.target.dataset.r, 1);
        save();
        rc();
      }
    };

    $("#chk").onclick = () => {
      if (!cart.length) return alert("Cart is empty");
      const t =
        "*New Order – SRVS Ventures*\n" +
        cart
          .map(
            (c, i) =>
              `${i + 1}. ${c.n} x${c.q} = ${rs(c.p * c.q)}\n   ${c.d}`
          )
          .join("\n") +
        `\n*Total: ${$("#ct").textContent}*\nName: ${$("#on").value || "-"}\nAddress: ${$("#oa").value || "-"}`;
      window.open(wl(t), "_blank");
    };

    $("#send").onclick = () =>
      window.open(
        wl(
          `Hi, I'm ${$("#cn").value || "-"} (${$("#cp").value || "-"}). ${$("#cm").value || "I'd like to enquire about gifts."}`
        ),
        "_blank"
      );

    $("#openCart").onclick = () => $("#cm2").classList.add("on");
    document.querySelectorAll("[data-close]").forEach(
      (b) =>
        (b.onclick = () => b.closest(".ov").classList.remove("on"))
    );
    document.querySelectorAll(".ov").forEach(
      (o) =>
        (o.onclick = (e) => {
          if (e.target == o) o.classList.remove("on");
        })
    );

    $("#hv").innerHTML = [0, 2, 3, 9].map((i) => art(P[i])).join("");

    chips();
    grid();
    rc();

    // Loading
    const hideL = () => {
      const l = $("#ld");
      if (l) {
        l.classList.add("off");
        setTimeout(() => l.remove(), 600);
      }
    };
    const t0 = Date.now();
    addEventListener("load", () => setTimeout(hideL, Math.max(0, 900 - (Date.now() - t0))));
    setTimeout(hideL, 4000);

    // Occasions
    const OI = {
      Birthday: "🎂",
      Anniversary: "💑",
      Wedding: "💍",
      Corporate: "💼",
      Kids: "🧸",
      Festive: "🪔",
    };
    $("#occ").innerHTML = Object.keys(OCC)
      .map(
        (k) =>
          `<div class="ot" data-o="${k}"><b>${OI[k]}</b><span>${k}</span></div>`
      )
      .join("");
    $("#occ").onclick = (e) => {
      const t = e.target.closest(".ot");
      if (!t) return;
      occ = occ == t.dataset.o ? "" : t.dataset.o;
      document
        .querySelectorAll(".ot")
        .forEach((x) => x.classList.toggle("on", x.dataset.o == occ));
      grid();
      $("#shop").scrollIntoView();
    };

    $("#q").oninput = (e) => {
      q = e.target.value.toLowerCase();
      grid();
    };
    $("#srt").onchange = (e) => {
      const v = e.target.value;
      srt =
        v == "lo"
          ? (a, b) => a.p - b.p
          : v == "hi"
          ? (a, b) => b.p - a.p
          : () => 0;
      grid();
    };

    // Announcement
    const AN = [
      "🎁 Free gift-ready packing on every order",
      "🚚 Delivery across India",
      "💬 Order on WhatsApp for the fastest response",
      "🎉 Special prices on bulk orders",
    ];
    let ai = 0;
    const ant = () => {
      $("#annT").textContent = AN[ai++ % AN.length];
    };
    ant();
    setInterval(ant, 3500);

    // Hero rotator
    const HS = [
      [
        'Gifts that say it <span>personally</span>.',
        "Name keychains, engraved items, photo frames, mugs and more, customized for every occasion.",
      ],
      [
        'Make every <span>birthday</span> special.',
        "Personalized mugs, frames and hampers made with your name, photo and message.",
      ],
      [
        'Wedding &amp; <span>corporate</span> gifting.',
        "Bulk orders with custom branding at special prices.",
      ],
    ];
    let hi = 0;
    setInterval(() => {
      hi = (hi + 1) % HS.length;
      const h = $("#h1"),
        p = $("#hp");
      h.classList.add("fade");
      p.classList.add("fade");
      setTimeout(() => {
        h.innerHTML = HS[hi][0];
        p.textContent = HS[hi][1];
        h.classList.remove("fade");
        p.classList.remove("fade");
      }, 400);
    }, 4500);

    // Reveal on scroll
    try {
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add("in");
              io.unobserve(x.target);
            }
          }),
        { threshold: 0.08 }
      );
      document
        .querySelectorAll("section,.cta,.trust")
        .forEach((el) => {
          el.classList.add("rv");
          io.observe(el);
        });
    } catch (e) {}

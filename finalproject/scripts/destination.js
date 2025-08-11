
const destinations = [
      {id:1,name:'Landmark Beach, Lagos',type:'beach',price:80, img:'https://i.pinimg.com/1200x/91/30/72/9130723b447d909c9b2986a2ad249df7.jpg',rating:4.9,desc:'Tropical beaches, with a nice landscape filled with sand.'},
      {id:2,name:'Nike Art Gallery, Lagos',type:'city',price:50,img:'https://i.pinimg.com/736x/95/3f/68/953f68c7394235d358b8089b0dda3973.jpg',rating:4.8,desc:'Showcasing a vast collection of Nigerian art and culture.'},
      {id:3,name:'Central Mosque, Abuja',type:'city',price:5,img:'https://i.pinimg.com/736x/c1/ec/c9/c1ecc95834552cb024c1e8c2a0d7b540.jpg',rating:4.6,desc:'One of the biggest mosque in Nigeria.'},
      {id:4,name:'Zuma Rock,',type:'mountain',price:100,img:'https://i.pinimg.com/1200x/41/4f/23/414f234b92bb7b9a6b4fa7e363386d99.jpg',rating:4.9,desc:'Ski resorts, alpine trails and crisp air.'},
      {id:5,name:'Ibeno Beach, Akwa Ibom',type:'beach',price:30,img:'https://i.pinimg.com/1200x/a2/c8/11/a2c81125649d32db6965c2532201e842.jpg',rating:4.8,desc:'Characterize by gentle slope, often features wave, tides and current'},
      {id:6,name:'Olumo Rock',type:'mountain',price:50,img:'https://i.pinimg.com/736x/ad/27/58/ad275800db2af53ede4f431cf8fffde1.jpg',rating:4.9,desc:' Its a massive granite outcrop that served as a natural fortress for the Egba people during 19th-century tribal wars'},
      {id:7,name:'Lekki Conservation Centre',type:'city',price:100,img:'https://i.pinimg.com/736x/94/7a/6d/947a6d6399ada22b8a3d16170e629e78.jpg',rating:4.7,desc:'A nature reserve with a canopy walkway and diverse wildlife.'},
      {id:8,name:'Tarkwa Bay Beach, Lagos',type:'beach',price:60,img:'https://i.pinimg.com/736x/3f/4d/78/3f4d7897bb8788068f2faa27ab698a30.jpg',rating:4.7,desc:'Tarkwa Bay is an artificial sheltered beach located near the Lagos harbour in Nigeria'},
      {id:9,name:'Park Vega water Park',type:'park',price:40,img:'https://i.pinimg.com/736x/74/75/a6/7475a60936117d8fd07004022bd62e23.jpg',rating:4.7,desc:'an amusement park that features water play areas such as swimming pools, water slides, splash pads, water playgrounds, and lazy rivers, as well as areas for floating, bathing, swimming, and other barefoot environments.'},
      {id:10,name:'University of Ibadan Zoo',type:'zoo',price:110,img:'https://images.hive.blog/DQmeB9sK6Jdhg2D1TLh4vTWLZuDKfL1m9L2SedsGMutZpoW/images%20(20).jpeg',rating:4.7,desc:'A university Zoo with divers of Wild Animal'},
      {id:11,name:'Pleasure park',type:'park',price:50,img:'https://i.pinimg.com/1200x/01/93/d7/0193d72857405ac9ac1eeba66b1f28bd.jpg',rating:4.6,desc:'A beautiful lake with a serene environment.'},
      {id:12,name:'Discovery park',type:'park',price:55,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTXqUJ7B8CsWjQXWMSiPEo4s3k8b0MQVoeA&s',rating:4.8,desc:'A fun park with various attractions and activities.'},
      {id:13,name:'Agbokim waterfall',type:'park',price:5,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVtkaX8yNP0WiWE5tBZcC5chpNgFoyoKB0w&s',rating:4.9,desc:'A beautiful waterfall with a serene environment.'},
      {id:14,name:'Tinapa resort',type:'park',price:60,img:'https://i.pinimg.com/736x/b2/94/90/b294907bc83c857aeb615d3516e62a61.jpg',rating:4.8,desc:'A resort with various attractions and activities.'},
      {id:15,name:'Obudu Mountain Resort',type:'mountain',price:70,img:'https://i.pinimg.com/736x/3f/4d/78/3f4d7897bb8788068f2faa27ab698a30.jpg',rating:4.9,desc:'A beautiful resort located in the mountains.'},
      {id:16,name:'Marina Resort Calabar',type:'park',price:65,img:'https://i.pinimg.com/1200x/f8/26/74/f82674d87834f10d9a5008f3aee379d4.jpg',rating:4.7,desc:'A beautiful resort located in Calabar.'},
    ];

    // ===== DOM refs =====
    const container = document.getElementById('cardsContainer');
    const filters = document.querySelectorAll('.chip');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const sortSel = document.getElementById('sortSel');
    const menuBtn = document.getElementById('menuBtn');
    const bookDlg = document.getElementById('bookDlg');
    const bookForm = document.getElementById('bookForm');
    const bookTitle = document.getElementById('bookTitle');
    const bookDesc = document.getElementById('bookDesc');
    const closeDlg = document.getElementById('closeDlg');

    // ===== Render function =====
    function render(list){
      container.innerHTML = '';
      list.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="meta">
            <h3>${item.name}</h3>
            <p class="muted">${item.desc}</p>
            <div class="row" style="margin-top:10px;justify-content:space-between">
              <div class="muted">⭐ ${item.rating}</div>
              <div class="price">$${item.price}</div>
            </div>
            <div style="margin-top:12px;display:flex;gap:8px">
              <button class="btn bookBtn" data-id="${item.id}">Book</button>
              <button class="chip" onclick="viewDetails(${item.id})">Details</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });

      // attach book handlers
      document.querySelectorAll('.bookBtn').forEach(b=>{
        b.addEventListener('click', e=>{
          const id = +e.currentTarget.dataset.id;
          openBooking(id);
        });
      });
    }

    // ===== Initial render =====
    render(destinations);

    // ===== Filtering, searching, sorting =====
    filters.forEach(f=>f.addEventListener('click', ()=>{
      const filter = f.dataset.filter;
      document.querySelectorAll('.chip').forEach(c=>c.style.borderColor='#EEE');
      f.style.borderColor='var(--accent)';
      applyFilters();
    }));

    searchBtn.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', (e)=>{ if(e.key === 'Enter') applyFilters(); });
    sortSel.addEventListener('change', applyFilters);

    function applyFilters(){
      const activeChip = Array.from(document.querySelectorAll('.chip')).find(c=>c.style.borderColor==='var(--accent)') || {dataset:{filter:'all'}};
      const q = searchInput.value.trim().toLowerCase();
      let list = destinations.filter(d=>{
        const typeMatch = activeChip.dataset.filter === 'all' || d.type === activeChip.dataset.filter;
        const textMatch = q === '' || d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
        return typeMatch && textMatch;
      });

      const sort = sortSel.value;
      if(sort === 'price-low') list.sort((a,b)=>a.price-b.price);
      if(sort === 'price-high') list.sort((a,b)=>b.price-a.price);
      if(sort === 'popular') list.sort((a,b)=>b.rating-a.rating);

      render(list);
    }

    // ===== Booking modal =====
    function openBooking(id){
      const item = destinations.find(d=>d.id===id);
      bookTitle.textContent = `Book: ${item.name}`;
      bookDesc.textContent = item.desc + ` — Price from $${item.price}`;
      if(typeof bookDlg.showModal === 'function') bookDlg.showModal();
      else alert('Booking: ' + item.name);
    }
    closeDlg.addEventListener('click', ()=>bookDlg.close());
    bookForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // simple confirmation
      const name = document.getElementById('bookName').value || 'Guest';
      const qty = document.getElementById('bookQty').value || 1;
      bookDlg.close();
      alert(`Thanks ${name}! Your booking for ${qty} person(s) is received. We'll email your confirmation.`);
    });

    // contact form
    document.getElementById('contactForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert(`Thanks ${name}! We'll reach you at ${email}.`);
      e.target.reset();
    });

    // small helpers
    function viewDetails(id){
      const item = destinations.find(d=>d.id===id);
      alert(`${item.name}\n\n${item.desc}\nRating: ${item.rating} | From: $${item.price}`);
    }

    // mobile menu (simple)
    menuBtn.addEventListener('click', ()=>{
      const nav = document.querySelector('nav');
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      menuBtn.setAttribute('aria-expanded', !open);
    });

    // quick demo: highlight "All" chip initially
    document.querySelector('.chip[data-filter="all"]').style.borderColor = 'var(--accent)';
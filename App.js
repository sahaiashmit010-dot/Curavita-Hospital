/* ============================================================
   SUPABASE CONNECTION
=============================================================== */
const SUPABASE_URL = 'https://ftllfxidhfswkxybzuzs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_rpaSZ1p0f1N4rHAanCYZcg_zZTt5FEM';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ============================================================
   DATA
=============================================================== */
const departments = [
  {id:"cardiology", name:"Cardiology", icon:"🫀", desc:"Comprehensive heart care from diagnostics to advanced cardiac surgery.", conditions:["Coronary artery disease","Arrhythmia","Heart failure"]},
  {id:"neurology", name:"Neurology", icon:"🧠", desc:"Expert diagnosis and treatment of brain, spine, and nerve disorders.", conditions:["Stroke","Epilepsy","Migraine"]},
  {id:"orthopedics", name:"Orthopedics", icon:"🦴", desc:"Complete bone, joint, and muscle care including joint replacement.", conditions:["Fractures","Arthritis","Sports injuries"]},
  {id:"pediatrics", name:"Pediatrics", icon:"🧸", desc:"Gentle, specialized care for infants, children, and adolescents.", conditions:["Growth concerns","Immunizations","Childhood infections"]},
  {id:"gynecology", name:"Gynecology & Obstetrics", icon:"🤰", desc:"Women's health, prenatal care, and safe delivery services.", conditions:["Pregnancy care","PCOS","Menstrual disorders"]},
  {id:"oncology", name:"Oncology", icon:"🎗️", desc:"Advanced cancer screening, diagnosis, and personalized treatment.", conditions:["Breast cancer","Lung cancer","Chemotherapy care"]},
  {id:"dermatology", name:"Dermatology", icon:"🧴", desc:"Skin, hair, and nail care for all ages, medical and cosmetic.", conditions:["Acne","Eczema","Skin infections"]},
  {id:"ent", name:"ENT", icon:"👂", desc:"Ear, nose, and throat treatment for all age groups.", conditions:["Sinusitis","Hearing loss","Tonsillitis"]},
  {id:"gastro", name:"Gastroenterology", icon:"🍽️", desc:"Digestive system care from diagnostics to advanced endoscopy.", conditions:["Acid reflux","IBS","Liver disease"]},
  {id:"nephro", name:"Nephrology & Urology", icon:"🩺", desc:"Kidney and urinary tract care including dialysis services.", conditions:["Kidney stones","UTIs","Chronic kidney disease"]},
  {id:"surgery", name:"General Surgery", icon:"⚕️", desc:"Safe, modern surgical care across a wide range of procedures.", conditions:["Hernia repair","Appendectomy","Gallbladder surgery"]},
  {id:"ophthal", name:"Ophthalmology", icon:"👁️", desc:"Complete eye care from routine exams to cataract surgery.", conditions:["Cataracts","Glaucoma","Vision correction"]},
  {id:"psychiatry", name:"Psychiatry", icon:"💭", desc:"Confidential mental health support and counseling services.", conditions:["Anxiety","Depression","Sleep disorders"]},
  {id:"dentistry", name:"Dentistry", icon:"🦷", desc:"Full dental care including cosmetic and restorative dentistry.", conditions:["Root canal","Braces","Teeth whitening"]},
];

const firstNames = ["Sarah","James","Aisha","Michael","Priya","David","Emily","Carlos","Grace","Daniel","Fatima","Robert","Olivia","Wei","Sofia","Ahmed","Laura","Kevin","Nadia","Thomas","Meera","Benjamin","Chloe","Samuel","Layla","Andrew","Hana","Marcus","Ines","Victor","Naomi","Elias","Ruth","Ivan","Zara","Peter","Amara","Leon","Yuki","Noah","Clara","Omar"];
const lastNames = ["Johnson","Patel","Williams","Chen","Garcia","Okafor","Smith","Rossi","Khan","Brown","Nguyen","Martinez","Kowalski","Silva","Ahmed","Robinson","Lopez","Kim","Bianchi","Adeyemi","Novak","Hughes","Torres","Ibrahim","Fischer","Reyes","Osei","Larsen","Costa","Whitfield"];

let doctors = [];
let nameIdx = 0;
departments.forEach(dep=>{
  for(let i=0;i<3;i++){
    const fn = firstNames[nameIdx % firstNames.length];
    const ln = lastNames[(nameIdx*3) % lastNames.length];
    nameIdx++;
    doctors.push({
      name: "Dr. " + fn + " " + ln,
      deptId: dep.id,
      deptName: dep.name,
      qual: i===0 ? "MBBS, MD (Senior Consultant)" : (i===1 ? "MBBS, MS, DNB" : "MBBS, MD, Fellowship"),
      exp: 6 + ((nameIdx*7) % 19)
    });
  }
});

const services = [
  {icon:"🚑", name:"24/7 Emergency & Trauma Care"},
  {icon:"🚗", name:"Ambulance Service"},
  {icon:"🛏️", name:"ICU & Critical Care"},
  {icon:"🧪", name:"Diagnostic & Laboratory Services"},
  {icon:"🩻", name:"Radiology & Imaging (X-Ray, MRI, CT)"},
  {icon:"💊", name:"Pharmacy"},
  {icon:"📋", name:"Health Checkup Packages"},
  {icon:"💻", name:"Telemedicine / Online Consultation"},
  {icon:"🩸", name:"Blood Bank"},
  {icon:"🏃", name:"Physiotherapy & Rehabilitation"},
];

const facilities = [
  {name:"Modern ICU", img:"1516549655169-df83a0774514"},
  {name:"Operation Theatres", img:"1551601651-2a8555f1a136"},
  {name:"Diagnostic Labs", img:"1579154204601-01588f351e67"},
  {name:"In-Patient Rooms", img:"1586773860418-d37222d8fce3"},
  {name:"Ambulance Fleet", img:"1587745416684-47953f16f02f"},
  {name:"Cafeteria", img:"1414235077428-338989a2e8c0"},
  {name:"Parking", img:"1506521781263-d8422e82f27a"},
  {name:"Free Wi-Fi Lounges", img:"1521737604893-d14cc237f11d"},
];

const testimonials = [
  {name:"Sarah Johnson", role:"Cardiology Patient", rating:5, quote:"The cardiology team at Curavita gave me my life back. Their attentiveness made all the difference during a scary time.", photo:"1494790108377-be9c29b29330"},
  {name:"Michael Chen", role:"Orthopedics Patient", rating:5, quote:"From my first consultation to physiotherapy, every step felt organized, caring, and genuinely professional.", photo:"1500648767791-00dcc994a43e"},
  {name:"Fatima Ahmed", role:"Maternity Patient", rating:5, quote:"The maternity ward staff were incredibly supportive throughout my pregnancy and delivery. I felt safe every day.", photo:"1544005313-94ddf0286df2"},
  {name:"David Martinez", role:"Emergency Care Patient", rating:4, quote:"Quick response, calm staff, and clear communication during an emergency I won't forget. Truly grateful.", photo:"1560250097-0b93528c311a"},
  {name:"Grace Okafor", role:"General Checkup", rating:5, quote:"Booking was simple and the doctors took time to actually listen. It doesn't feel like a typical hospital visit.", photo:"1489424731084-a5d8b219a5bb"},
];

const blogPosts = [
  {cat:"Cardiology", title:"5 Simple Habits for a Healthier Heart", excerpt:"Small daily changes that meaningfully reduce your risk of heart disease over time.", date:"Jul 10, 2026", img:"1490645935967-10de6ba17061"},
  {cat:"Endocrinology", title:"Understanding Diabetes: Early Signs to Watch", excerpt:"Recognizing symptoms early can help you manage diabetes before complications arise.", date:"Jul 2, 2026", img:"1550831107-1553da8c8464"},
  {cat:"General Wellness", title:"Why Regular Health Checkups Matter", excerpt:"Preventive screening catches problems early, when they're easiest to treat.", date:"Jun 24, 2026", img:"1576091160399-112ba8d25d1d"},
  {cat:"Pediatrics", title:"A Parent's Guide to Vaccination Schedules", excerpt:"What to expect at each stage of your child's immunization journey.", date:"Jun 15, 2026", img:"1584515933487-779824d29309"},
];

const faqs = [
  {q:"How do I book an appointment at Curavita Hospital?", a:"You can book online using the appointment form on this website, call our general line, or visit the hospital's front desk directly."},
  {q:"Do you accept health insurance?", a:"Yes, we partner with major insurance providers including HealthGuard, MediShield Plus, and CareFirst Insurance. Please bring your insurance card to your visit."},
  {q:"What are the hospital's visiting hours?", a:"General visiting hours are 4:00 PM – 7:00 PM daily. ICU visiting hours are limited and coordinated with nursing staff."},
  {q:"What should I do in a medical emergency?", a:"Call our 24/7 emergency hotline at +1 (800) 555-0199 or come directly to our Emergency & Trauma department, open around the clock."},
  {q:"Can I request a specific doctor for my appointment?", a:"Yes, use the 'Select Doctor' field on the appointment form, or choose 'Any available doctor' if you'd prefer the next available specialist."},
  {q:"Is telemedicine available for consultations?", a:"Yes, Curavita offers secure online video consultations for eligible follow-ups and non-emergency concerns."},
];

/* ============================================================
   RENDER: DEPARTMENTS
=============================================================== */
const deptGrid = document.getElementById('deptGrid');
departments.forEach(dep=>{
  const card = document.createElement('div');
  card.className='dept-card';
  card.innerHTML = `
    <div class="ico">${dep.icon}</div>
    <h4>${dep.name}</h4>
    <p>${dep.desc}</p>
    <div class="toggle">View details <span class="arrow">▾</span></div>
    <div class="dept-more">
      <div class="cond">Common conditions treated:</div>
      <ul>${dep.conditions.map(c=>`<li>• ${c}</li>`).join('')}</ul>
      <a href="#doctors" class="btn btn-outline btn-sm view-doctors-link" data-dept="${dep.id}" style="width:100%;">View Doctors</a>
    </div>
  `;
  card.addEventListener('click', (e)=>{
    if(e.target.closest('.view-doctors-link')) return;
    card.classList.toggle('open');
  });
  deptGrid.appendChild(card);
});

/* ============================================================
   RENDER: DOCTOR FILTER + GRID
=============================================================== */
const filterBar = document.getElementById('filterBar');
const doctorGrid = document.getElementById('doctorGrid');

function renderFilters(){
  const allChip = document.createElement('button');
  allChip.className='filter-chip active';
  allChip.textContent='All Departments';
  allChip.dataset.dept='all';
  filterBar.appendChild(allChip);
  departments.forEach(dep=>{
    const chip = document.createElement('button');
    chip.className='filter-chip';
    chip.textContent=dep.name;
    chip.dataset.dept=dep.id;
    filterBar.appendChild(chip);
  });
  filterBar.addEventListener('click', e=>{
    const chip = e.target.closest('.filter-chip');
    if(!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    renderDoctors(chip.dataset.dept);
  });
}

function renderDoctors(filter){
  doctorGrid.innerHTML='';
  const list = filter==='all' ? doctors : doctors.filter(d=>d.deptId===filter);
  if(list.length===0){
    doctorGrid.innerHTML = `<div class="doctors-empty">No doctors found for this department.</div>`;
    return;
  }
  list.forEach(doc=>{
    const card = document.createElement('div');
    card.className='doctor-card';
    card.innerHTML = `
      <div class="doctor-photo"><div class="doctor-avatar">${doc.name.split(' ').slice(1).map(n=>n[0]).join('').slice(0,2) || doc.name[4]}</div></div>
      <div class="doctor-body">
        <div class="tag">${doc.deptName}</div>
        <h4>${doc.name}</h4>
        <div class="qual">${doc.qual}</div>
        <div class="exp">🕐 ${doc.exp} years experience</div>
        <button class="btn btn-primary btn-sm book-doc-btn" data-name="${doc.name}" data-dept="${doc.deptId}">Book Appointment</button>
      </div>
    `;
    doctorGrid.appendChild(card);
  });
}
renderFilters();
renderDoctors('all');

/* Jump from department card to doctors filtered */
document.addEventListener('click', e=>{
  const link = e.target.closest('.view-doctors-link');
  if(link){
    const depId = link.dataset.dept;
    filterBar.querySelectorAll('.filter-chip').forEach(c=>{
      c.classList.toggle('active', c.dataset.dept===depId);
    });
    renderDoctors(depId);
  }
});

/* ============================================================
   RENDER: SERVICES
=============================================================== */
const serviceGrid = document.getElementById('serviceGrid');
services.forEach(s=>{
  serviceGrid.innerHTML += `<div class="service-card"><div class="ico">${s.icon}</div><h4>${s.name}</h4></div>`;
});

/* ============================================================
   RENDER: FACILITIES
=============================================================== */
const facilityGrid = document.getElementById('facilityGrid');
facilities.forEach(f=>{
  facilityGrid.innerHTML += `
    <div class="facility-card">
      <img src="https://images.unsplash.com/photo-${f.img}?q=80&w=500&auto=format&fit=crop" alt="${f.name} at Curavita Hospital">
      <div class="overlay"><span>${f.name}</span></div>
    </div>`;
});

/* ============================================================
   RENDER: BLOG
=============================================================== */
const blogGrid = document.getElementById('blogGrid');
blogPosts.forEach(b=>{
  blogGrid.innerHTML += `
    <div class="blog-card">
      <img src="https://images.unsplash.com/photo-${b.img}?q=80&w=500&auto=format&fit=crop" alt="${b.title}">
      <div class="blog-body">
        <div class="blog-cat">${b.cat}</div>
        <h4>${b.title}</h4>
        <p>${b.excerpt}</p>
        <div class="blog-meta"><span>${b.date}</span><a href="#">Read More →</a></div>
      </div>
    </div>`;
});

/* ============================================================
   RENDER: FAQ ACCORDION
=============================================================== */
const faqList = document.getElementById('faqList');
faqs.forEach(f=>{
  const item = document.createElement('div');
  item.className='faq-item';
  item.innerHTML = `
    <button class="faq-q"><span>${f.q}</span><span class="plus">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  `;
  item.querySelector('.faq-q').addEventListener('click', ()=>{
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
  faqList.appendChild(item);
});

/* ============================================================
   RENDER: TESTIMONIALS CAROUSEL
=============================================================== */
const testiSlides = document.getElementById('testiSlides');
const testiNav = document.getElementById('testiNav');
testimonials.forEach((t,i)=>{
  testiSlides.innerHTML += `
    <div class="testi-slide">
      <div class="testi-card">
        <div class="stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
        <p class="quote">"${t.quote}"</p>
        <div class="testi-person">
          <img src="https://images.unsplash.com/photo-${t.photo}?q=80&w=200&auto=format&fit=crop" alt="${t.name}">
          <div style="text-align:left;"><strong>${t.name}</strong><span>${t.role}</span></div>
        </div>
      </div>
    </div>`;
  testiNav.innerHTML += `<button class="testi-dot${i===0?' active':''}" data-i="${i}"></button>`;
});
let testiIdx = 0;
function goToTesti(i){
  testiIdx = (i + testimonials.length) % testimonials.length;
  testiSlides.style.transform = `translateX(-${testiIdx*100}%)`;
  document.querySelectorAll('.testi-dot').forEach((d,di)=>d.classList.toggle('active', di===testiIdx));
}
document.getElementById('testiPrev').addEventListener('click', ()=>goToTesti(testiIdx-1));
document.getElementById('testiNext').addEventListener('click', ()=>goToTesti(testiIdx+1));
testiNav.addEventListener('click', e=>{
  const dot = e.target.closest('.testi-dot');
  if(dot) goToTesti(Number(dot.dataset.i));
});
let testiAuto = setInterval(()=>goToTesti(testiIdx+1), 6000);
document.querySelector('.testi-track-wrap').addEventListener('mouseenter', ()=>clearInterval(testiAuto));
document.querySelector('.testi-track-wrap').addEventListener('mouseleave', ()=>{ testiAuto = setInterval(()=>goToTesti(testiIdx+1), 6000); });

/* ============================================================
   FOOTER DEPARTMENT LIST
=============================================================== */
const footerDeptList = document.getElementById('footerDeptList');
departments.slice(0,7).forEach(d=>{
  footerDeptList.innerHTML += `<li><a href="#departments">${d.name}</a></li>`;
});

/* ============================================================
   APPOINTMENT FORM: dept -> doctor dropdown, validation, submit
=============================================================== */
const deptSelect = document.getElementById('deptSelect');
const doctorSelect = document.getElementById('doctorSelect');
departments.forEach(dep=>{
  deptSelect.innerHTML += `<option value="${dep.id}">${dep.name}</option>`;
});

function populateDoctorSelect(deptId){
  doctorSelect.innerHTML = '<option value="">Any available doctor</option>';
  const list = deptId ? doctors.filter(d=>d.deptId===deptId) : doctors;
  list.forEach(doc=>{
    doctorSelect.innerHTML += `<option value="${doc.name}">${doc.name}</option>`;
  });
}
populateDoctorSelect('');
deptSelect.addEventListener('change', ()=>populateDoctorSelect(deptSelect.value));

/* Pre-fill from "Book Appointment" buttons on doctor cards */
document.addEventListener('click', e=>{
  const btn = e.target.closest('.book-doc-btn');
  if(!btn) return;
  deptSelect.value = btn.dataset.dept;
  populateDoctorSelect(btn.dataset.dept);
  doctorSelect.value = btn.dataset.name;
  document.getElementById('appointment').scrollIntoView({behavior:'smooth'});
});

/* Set min date to today */
const apptDateInput = document.getElementById('apptDate');
apptDateInput.min = new Date().toISOString().split('T')[0];

/* Form validation + fake submit */
const apptForm = document.getElementById('apptForm');
const confirmBox = document.getElementById('confirmBox');

function validateField(id, valid){
  const fg = document.getElementById(id);
  fg.classList.toggle('invalid', !valid);
  return valid;
}

apptForm.addEventListener('submit', async function(e){
  e.preventDefault();
  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const dept = deptSelect.value;
  const deptLabel = deptSelect.options[deptSelect.selectedIndex]?.text || '';
  const doctor = doctorSelect.value || 'Any available doctor';
  const date = apptDateInput.value;
  const time = document.getElementById('apptTime').value;
  const reason = document.getElementById('reason').value.trim();

  const phoneOk = /^[+0-9 ()-]{7,20}$/.test(phone);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  let valid = true;
  valid = validateField('fg-name', name.length>1) && valid;
  valid = validateField('fg-phone', phoneOk) && valid;
  valid = validateField('fg-email', emailOk) && valid;
  valid = validateField('fg-dept', !!dept) && valid;
  valid = validateField('fg-date', !!date) && valid;
  valid = validateField('fg-time', !!time) && valid;

  if(!valid) return;

  const submitBtn = apptForm.querySelector('.appt-submit');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Booking...';

  let formError = document.getElementById('apptFormError');
  if(!formError){
    formError = document.createElement('div');
    formError.id = 'apptFormError';
    formError.style.cssText = 'display:none;background:#FDECEC;color:#C0392B;border:1px solid #F5C6C6;border-radius:10px;padding:12px 16px;font-size:.85rem;margin-top:14px;';
    apptForm.appendChild(formError);
  }
  formError.style.display = 'none';

  try{
    const { error } = await supabaseClient.from('appointments').insert([{
      full_name: name,
      phone: phone,
      email: email,
      department: deptLabel,
      doctor: doctor,
      appointment_date: date,
      appointment_time: time,
      reason: reason
    }]);

    if(error) throw error;

    document.getElementById('confirmName').textContent = name;
    const d = new Date(date + 'T00:00:00');
    document.getElementById('confirmDate').textContent = d.toLocaleDateString('en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'}) + ' at ' + time;

    apptForm.style.display = 'none';
    confirmBox.classList.add('show');
  }catch(err){
    console.error('Supabase insert failed:', err);
    formError.textContent = "We couldn't save your appointment. Error: " + (err.message || err.hint || JSON.stringify(err));
    formError.style.display = 'block';
  }finally{
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});

document.getElementById('bookAnother').addEventListener('click', ()=>{
  apptForm.reset();
  document.querySelectorAll('.form-group.invalid').forEach(fg=>fg.classList.remove('invalid'));
  const formError = document.getElementById('apptFormError');
  if(formError) formError.style.display = 'none';
  populateDoctorSelect('');
  confirmBox.classList.remove('show');
  apptForm.style.display = 'block';
});

/* ============================================================
   ADMIN PANEL: single-slot signup, login, bookings dashboard
=============================================================== */
const adminModal = document.getElementById('adminModalOverlay');
const adminPanelLink = document.getElementById('adminPanelLink');
const adminCloseBtn = document.getElementById('adminCloseBtn');
const adminTabLogin = document.getElementById('adminTabLogin');
const adminTabSignup = document.getElementById('adminTabSignup');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminSignupForm = document.getElementById('adminSignupForm');
const adminAuthMsg = document.getElementById('adminAuthMsg');
const adminDashboard = document.getElementById('adminDashboard');
const adminAuthWrap = document.getElementById('adminAuthWrap');

function showAdminMsg(text, type){
  adminAuthMsg.textContent = text;
  adminAuthMsg.className = 'admin-msg ' + type;
}
function clearAdminMsg(){
  adminAuthMsg.textContent = '';
  adminAuthMsg.className = 'admin-msg';
}
function switchAdminTab(tab){
  adminTabLogin.classList.toggle('active', tab==='login');
  adminTabSignup.classList.toggle('active', tab==='signup');
  adminLoginForm.classList.toggle('active', tab==='login');
  adminSignupForm.classList.toggle('active', tab==='signup');
  clearAdminMsg();
}
adminTabLogin.addEventListener('click', ()=>switchAdminTab('login'));
adminTabSignup.addEventListener('click', ()=>switchAdminTab('signup'));

async function openAdminModal(){
  adminModal.classList.add('open');
  clearAdminMsg();

  const { data:{ session } } = await supabaseClient.auth.getSession();
  if(session){
    showAdminDashboard();
    return;
  }
  adminDashboard.classList.remove('active');
  adminAuthWrap.style.display = 'block';

  const { data:claimed, error } = await supabaseClient.rpc('is_admin_slot_claimed');
  if(!error && claimed === true){
    adminTabSignup.style.display = 'none';
    switchAdminTab('login');
  }else{
    adminTabSignup.style.display = 'inline-block';
  }
}

adminPanelLink.addEventListener('click', (e)=>{
  e.preventDefault();
  openAdminModal();
});
adminCloseBtn.addEventListener('click', ()=> adminModal.classList.remove('open'));
adminModal.addEventListener('click', (e)=>{ if(e.target===adminModal) adminModal.classList.remove('open'); });

adminSignupForm.addEventListener('submit', async function(e){
  e.preventDefault();
  clearAdminMsg();
  const email = document.getElementById('adminSignupEmail').value.trim();
  const pass = document.getElementById('adminSignupPassword').value;
  const confirmPass = document.getElementById('adminSignupConfirm').value;

  if(pass.length < 6){ showAdminMsg('Password must be at least 6 characters.', 'error'); return; }
  if(pass !== confirmPass){ showAdminMsg('Passwords do not match.', 'error'); return; }

  const btn = adminSignupForm.querySelector('button[type=submit]');
  const originalText = btn.textContent;
  btn.disabled = true; btn.textContent = 'Creating account...';

  try{
    const { data:claimResult, error:claimError } = await supabaseClient.rpc('claim_admin_slot', { p_email: email });
    if(claimError) throw claimError;

    if(claimResult !== true){
      showAdminMsg('An admin account already exists for this site. Please log in instead.', 'error');
      adminTabSignup.style.display = 'none';
      switchAdminTab('login');
      return;
    }

    const { error:signUpError } = await supabaseClient.auth.signUp({ email, password: pass });
    if(signUpError){
      await supabaseClient.rpc('unclaim_admin_slot', { p_email: email });
      throw signUpError;
    }

    showAdminMsg('Admin account created. You can log in now.', 'success');
    adminTabSignup.style.display = 'none';
    switchAdminTab('login');
  }catch(err){
    showAdminMsg(err.message || 'Something went wrong. Please try again.', 'error');
  }finally{
    btn.disabled = false; btn.textContent = originalText;
  }
});

adminLoginForm.addEventListener('submit', async function(e){
  e.preventDefault();
  clearAdminMsg();
  const email = document.getElementById('adminLoginEmail').value.trim();
  const pass = document.getElementById('adminLoginPassword').value;
  const btn = adminLoginForm.querySelector('button[type=submit]');
  const originalText = btn.textContent;
  btn.disabled = true; btn.textContent = 'Logging in...';

  try{
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if(error) throw error;
    await showAdminDashboard();
  }catch(err){
    showAdminMsg(err.message || 'Invalid email or password.', 'error');
  }finally{
    btn.disabled = false; btn.textContent = originalText;
  }
});

async function showAdminDashboard(){
  adminAuthWrap.style.display = 'none';
  adminDashboard.classList.add('active');
  await loadBookings();
}

async function loadBookings(){
  const tbody = document.getElementById('adminBookingsBody');
  tbody.innerHTML = `<tr><td colspan="8" class="admin-empty">Loading bookings...</td></tr>`;
  const { data, error } = await supabaseClient.from('appointments').select('*').order('created_at', { ascending:false });
  if(error){
    tbody.innerHTML = `<tr><td colspan="8" class="admin-empty">Failed to load bookings: ${error.message}</td></tr>`;
    return;
  }
  if(!data || data.length===0){
    tbody.innerHTML = `<tr><td colspan="8" class="admin-empty">No appointments booked yet.</td></tr>`;
    return;
  }
  tbody.innerHTML = data.map(b=>`
    <tr>
      <td>${b.full_name||''}</td>
      <td>${b.phone||''}</td>
      <td>${b.email||''}</td>
      <td>${b.department||''}</td>
      <td>${b.doctor||''}</td>
      <td>${b.appointment_date||''}</td>
      <td>${b.appointment_time||''}</td>
      <td>${b.reason ? (b.reason.length>40 ? b.reason.slice(0,40)+'…' : b.reason) : ''}</td>
    </tr>
  `).join('');
}

document.getElementById('adminRefreshBtn').addEventListener('click', loadBookings);
document.getElementById('adminLogoutBtn').addEventListener('click', async ()=>{
  await supabaseClient.auth.signOut();
  adminDashboard.classList.remove('active');
  adminAuthWrap.style.display = 'block';
  adminLoginForm.reset();
  switchAdminTab('login');
});

/* ============================================================
   INTERNAL LINKS: smooth-scroll via JS instead of raw #anchors
   (avoids "open URL" prompts some viewers show for href="#...")
=============================================================== */
document.addEventListener('click', function(e){
  const link = e.target.closest('a[href^="#"]');
  if(!link) return;
  const href = link.getAttribute('href');
  e.preventDefault();
  if(href.length > 1){
    const target = document.querySelector(href);
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

const header = document.getElementById('siteHeader');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

const navAnchors = document.querySelectorAll('nav.main-nav a');
const sections = ['home','about','departments','doctors','services','facilities','blog','contact'].map(id=>document.getElementById(id)).filter(Boolean);

window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY>10);

  let current = sections[0]?.id;
  sections.forEach(sec=>{
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120) current = sec.id;
  });
  navAnchors.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
});

/* ============================================================
   EKG DIVIDER: draw-in on scroll into view
=============================================================== */
const ekgEls = document.querySelectorAll('[data-ekg]');
const ekgObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, {threshold:0.4});
ekgEls.forEach(el=>ekgObserver.observe(el));
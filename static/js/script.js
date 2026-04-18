// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Form submission
function handleSubmit(btn) {
  btn.textContent = "✓ Enquiry Sent! We'll respond within 24 hours.";
  btn.style.background = '#2E1F10';
  btn.style.pointerEvents = 'none';
}

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 30px rgba(26,15,5,0.12)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


document.addEventListener("DOMContentLoaded", function () {

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (nav) {
      if (window.scrollY > 60) {
        nav.style.boxShadow = '0 4px 30px rgba(26,15,5,0.12)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }
  });

});


// ================================
// 🌍 GLOBAL TRADE MAP (FINAL)
// ================================

function initGlobalMap() {

    var map = L.map('global-map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: false,
        attributionControl: false,
        worldCopyJump: false,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0
    });

    // Dark map
    L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { noWrap: true }
    ).addTo(map);

    // Nagpur
    var nagpur = [21.1458, 79.0882];

    L.circleMarker(nagpur, {
        radius: 7,
        color: '#ff7b35',
        fillColor: '#ff7b35',
        fillOpacity: 1
    }).addTo(map).bindPopup("Nagpur (Origin)");

    // Routes
    var routes = [
        { name: "USA", coords: [37.0902, -95.7129] },
        { name: "UAE", coords: [23.4241, 53.8478] },
        { name: "Germany", coords: [51.1657, 10.4515] },
        { name: "Australia", coords: [-25.2744, 133.7751] },
        { name: "South Africa", coords: [-30.5595, 22.9375] }
    ];

    // Create curved animated route
    function createRoute(from, to) {

        // Control point
        var control = [
            (from[0] + to[0]) / 2 + 10,
            (from[1] + to[1]) / 2
        ];

        // Draw curve
        L.curve([
            'M', from,
            'Q', control,
            to
        ], {
            color: '#ff7b35',
            weight: 2,
            dashArray: '6,10',
            opacity: 0.8
        }).addTo(map);

        // Moving dot
        var dot = L.circleMarker(from, {
            radius: 3,
            color: '#ff7b35',
            fillColor: '#ff7b35',
            fillOpacity: 1
        }).addTo(map);

        let t = 0;

        function animate() {
            t += 0.004;
            if (t > 1) t = 0;

            var lat =
                (1 - t) * (1 - t) * from[0] +
                2 * (1 - t) * t * control[0] +
                t * t * to[0];

            var lng =
                (1 - t) * (1 - t) * from[1] +
                2 * (1 - t) * t * control[1] +
                t * t * to[1];

            dot.setLatLng([lat, lng]);

            requestAnimationFrame(animate);
        }

        animate();
    }

    // Add routes
    routes.forEach(route => {

        L.circleMarker(route.coords, {
            radius: 5,
            color: '#ffffff',
            fillColor: '#ffffff',
            fillOpacity: 1
        }).addTo(map).bindPopup(route.name);

        createRoute(nagpur, route.coords);
    });

    // Smooth zoom to India
    setTimeout(() => {
        map.flyTo(nagpur, 3);
    }, 1000);
}

// Run after page load
window.addEventListener("load", initGlobalMap);
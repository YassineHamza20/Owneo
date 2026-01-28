 <template>
  <!-- Main home/dashboard view container -->
  <div class="home-view">
    <!-- Green informational banner at the top -->
    <div class="banner">
      <div class="banner-content">
        <!-- Emoji and informational text -->
        <span>👀 Hier ist noch nicht so viel los</span>
      </div>
      <!-- Call-to-action button in banner -->
      <button class="banner-button">
        Erste immo anlegen
        <ArrowRight class="arrow-icon" /> 
      </button>
    </div>

    <!-- Top section with two side-by-side cards -->
    <div class="cards-row">
      <!-- Left card: Rental Income information -->
      <div class="card income-card">
        <div class="card-header">
          <span class="card-label">MIETEINNAHMEN DEZEMBER</span>
        </div>
        <div class="card-amount">0.00€</div>
        <div class="card-subtext">von 0.00€</div>
        <button class="card-button">
          Offene Mieten anzeigen
          <ArrowRight class="arrow-icon" />
        </button>
      </div>

      <!-- Right card: Appointments/Upcoming tasks -->
      <div class="card appointments-card">
        <div class="card-header">
          <span class="card-label">TERMINE</span>
        </div>
        <div class="card-title">Fällig diese Woche</div>
        <div class="appointment-list">
          <!-- First appointment item -->
          <div class="appointment-item">
            <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen class="h-6 w-6 text-black" />
            </div>
            <span>Label</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          
          <!-- Second appointment item -->
          <div class="appointment-item">
            <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen class="h-6 w-6 text-black" />
            </div>
            <span>Label</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          
          <!-- Third appointment item -->
          <div class="appointment-item">
            <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen class="h-6 w-6 text-black" />
            </div>
            <span>Label</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          
          <!-- Fourth appointment item -->
          <div class="appointment-item">
            <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen class="h-6 w-6 text-black" />
            </div>
            <span>Label</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom card: Wealth forecast chart -->
    <div class="card chart-card">
      <div class="chart-header">
        <div>
          <h3 class="chart-title">Vermögensprognose</h3>
          <p class="chart-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim</p>
        </div>
      </div>
      <div class="chart-container">
        <!-- SVG chart container -->
        <svg class="chart" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
          <!-- Vertical grid lines for date markers -->
          <line x1="160" y1="0" x2="160" y2="180" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="320" y1="0" x2="320" y2="180" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="480" y1="0" x2="480" y2="180" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="640" y1="0" x2="640" y2="180" stroke="#e0e0e0" stroke-width="1"/>
          
          <!-- Main chart line with Bezier curves -->
          <path 
            d="M -50 140 Q 160 130, 200 120 Q 240 110, 300 120 Q 360 130, 400 90 Q 440 50, 500 70 Q 560 90, 600 120 Q 640 150, 700 100 Q 760 50, 800 40" 
            fill="none" 
            stroke="#7FA58F" 
            stroke-width="3"
            stroke-linecap="round"
          />
          
          <!-- Gradient definitions for chart fill -->
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#7FA58F;stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:#7FA58F;stop-opacity:0" />
            </linearGradient>
          </defs>
          
          <!-- Filled area under chart line -->
          <path 
            d="M 40 140 Q 160 130, 200 120 Q 240 110, 300 120 Q 360 130, 400 90 Q 440 50, 500 70 Q 560 90, 600 120 Q 640 150, 700 100 Q 760 50, 800 40 L 800 180 L 40 180 Z" 
            fill="url(#chartGradient)"
          />
          
          <!-- Highlight dot on chart line -->
          <circle cx="400" cy="90" r="10" fill="#7FA58F" stroke="white" stroke-width="2"/>
          
          <!-- Value label box above highlight dot -->
          <g class="value-label">
            <rect x="340" y="50" width="120" height="30" rx="6" fill="white" stroke="#7FA58F" stroke-width="1" opacity="0.95"/>
            <text x="400" y="70" text-anchor="middle" fill="#6B7280" font-size="12" font-weight="700">450.000€</text>
          </g>
        </svg>
        
        <!-- Date labels along bottom of chart -->
        <div class="chart-labels">
          <span>28 Feb</span>
          <span>1 Mar</span>
          <span>3 Mar</span>
          <span>5 Mar</span>
          <span>7 Mar</span>
          <span>9 Mar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import icon components
import { ArrowRight, BookOpen } from 'lucide-vue-next';

export default {
  name: 'HomeView', // Component name
  
  // Register icon components
  components: {
    ArrowRight, // Right arrow icon
    BookOpen    // Book/notebook icon
  }
}
</script>
<style scoped>
.home-view {
  padding: 24px;
  background: #fff;
  flex: 1;
}

.banner {
  background: var(--primary-green);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
}

.banner-button {
  background: white;
  color: black;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}

.banner-button:hover {
  background: #f5f5f5;
}

.cards-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.card {
  background: #6B7280;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 16px;
}

.card-label {
  font-size: 11px;
  font-weight: 600;
  color: rgb(16, 181, 167);
  letter-spacing: 0.5px;
}

.income-card {
  background: #f1f9f8;   
  border-color: #e9fff8;   
}

.card-amount {
  font-size: 30px;
  font-weight: 600;
  color: #6B7280;
  margin-bottom: 4px;
}

.card-subtext {
  font-size: 13px;
  color: #6B7280;
  margin-bottom: 20px;
}

.card-button {
  background: #9CA3AF;
  border: 1px solid var(--border-color);
  padding: 8px 12px; 
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s;
  width: 100%;
  justify-content: center;
}

.card-button:hover {
   background: #4B5563;  
  border-color: #4B5563;
  color: white;
}

.appointments-card {
  background: #f1f9f8;   
  border-color: #e9fff8;   
}

.card-title {
  font-size: 30px;
  font-weight: 600;
  color: #6B7280;
  margin-bottom: 12px;
}

.appointment-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.appointment-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  color: #6B7280;
  font-size: 13px;
  min-height: 44px;
}

.appointment-item:hover {
  background: rgba(255, 255, 255, 0.9);
}

.appointment-item .chevron {
  margin-left: auto;
  width: 12px;
  height: 12px;
}
 
.chart-card {
  background: #f1f9f8; 
  border-color: #e9fff8;   
  padding: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 18px;
  font-weight: 600;
  color: #6B7280;
  margin-bottom: 8px;
}

.chart-subtitle {
  font-size: 13px;
  color: #6B7280;
  line-height: 1.5;
  max-width: 500px;
}

.chart-container {
  position: relative;
  padding: 10px 0;
}

.chart {
  width: 100%;
  height: 250px;
  display: block;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0;
  font-size: 11px;
  color: #6B7280;
}

.value-label text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 11px;
}

.chart-value {
  font-size: 28px;
  font-weight: 700;
  color: #6B7280;
}

/* Mobile styles */
@media (max-width: 767px) {
  .home-view {
    padding: 16px;
  }
  
  .banner {
    flex-direction: column;
    padding: 16px;
    text-align: center;
    gap: 8px;
  }
  
  .banner-content {
    flex-direction: column;
    text-align: center;
    font-size: 13px;
  }
  
  .banner-button {
    width: 100%;
    justify-content: center;
    padding: 10px 16px;
  }
  
  .card {
    padding: 16px;
  }
  
  .card-amount {
    font-size: 24px;
  }
  
  .card-title {
    font-size: 24px;
  }
  
  .card-button {
    font-size: 11px;
    padding: 10px 12px;
  }
  
  .chart {
    height: 180px;
  }
  
  .chart-labels {
    padding: 8px 10px 0;
    font-size: 9px;
  }
  
  .chart-title {
    font-size: 16px;
  }
  
  .chart-subtitle {
    font-size: 12px;
  }
  
  .chart-card {
    padding: 16px;
  }
}

/* Tablet styles */
@media (min-width: 768px) {
  .home-view {
    padding: 24px;
  }
  
  .cards-row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .banner {
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  
  .banner-content {
    flex-direction: row;
  }
  
  .banner-button {
    width: auto;
  }
  
  .card-button {
    width: auto;
  }
  
  .chart {
    height: 220px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .home-view {
    padding: 32px;
  }
  
  .banner {
    justify-content: center;
  }
  
  .card {
    padding: 24px;
  }
  
  .card-amount {
    font-size: 30px;
  }
  
  .card-title {
    font-size: 30px;
  }
  
  .chart {
    height: 250px;
  }
  
  .chart-labels {
    padding: 10px 20px 0;
    font-size: 11px;
  }
}

/* Small mobile devices */
@media (max-width: 375px) {
  .home-view {
    padding: 12px;
  }
  
  .banner {
    padding: 12px;
    gap: 8px;
  }
  
  .banner-content {
    font-size: 12px;
    gap: 8px;
  }
  
  .banner-button {
    font-size: 12px;
    padding: 8px 12px;
  }
  
  .cards-row {
    gap: 16px;
  }
  
  .card {
    padding: 12px;
  }
  
  .card-amount,
  .card-title {
    font-size: 20px;
  }
  
  .card-label {
    font-size: 10px;
  }
  
  .appointment-item {
    font-size: 12px;
    padding: 6px;
  }
  
  .chart {
    height: 150px;
  }
  
  .chart-labels {
    font-size: 8px;
    padding: 6px 5px 0;
  }
  
  .chart-title {
    font-size: 14px;
  }
  
  .chart-subtitle {
    font-size: 11px;
  }
}
</style>
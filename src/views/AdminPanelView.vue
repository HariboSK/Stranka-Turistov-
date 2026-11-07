<template>
  <div id="admin-panel" class="admin-panel">
    <!-- Header -->
    <header class="admin-header">
      <div class="admin-header-content">
        <img src="/IMG/navbar/logo.webp" alt="Logo" class="admin-logo" />
        <h1>Admin Panel - Klátovskí turisti</h1>
        <button id="logout-btn" class="btn-logout">Odhlásiť sa</button>
      </div>
    </header>

    <!-- Navigation Tabs -->
    <nav class="admin-nav">
      <button class="tab-btn active" data-tab="akcie">Spravovať Akcie</button>
      <button class="tab-btn" data-tab="fotky">Spravovať Fotky</button>
      <button class="tab-btn" data-tab="nastavenia">Nastavenia</button>
    </nav>

    <!-- Content Area -->
    <main class="admin-content">
      <!-- Tab: Akcie -->
      <div id="akcie-tab" class="tab-content active">
        <div class="content-header">
          <h2>Správa Akcií</h2>
          <button class="btn-add" id="add-akcia-btn">+ Pridať novú akciu</button>
        </div>

        <!-- Formulár na pridanie akcie -->
        <div id="akcia-form" class="form-container is-hidden">
          <h3>Nová Akcia</h3>
          <form id="nova-akcia-form">
            <div class="form-group">
              <label for="akcia-nazov">Názov akcie:</label>
              <input type="text" id="akcia-nazov" required />
            </div>
            <div class="form-group">
              <label for="akcia-datum">Dátum:</label>
              <input type="date" id="akcia-datum" required />
            </div>
            <div class="form-group">
              <label for="akcia-cas">Čas stretnutia:</label>
              <input type="text" id="akcia-cas" placeholder="napr. 8:00" required />
            </div>
            <div class="form-group">
              <label for="akcia-miesto">Miesto stretnutia:</label>
              <input type="text" id="akcia-miesto" required />
            </div>
            <div class="form-group">
              <label for="akcia-trasa">Trasa:</label>
              <input type="text" id="akcia-trasa" required />
            </div>
            <div class="form-group">
              <label for="akcia-trasa-link">Link na trasu (URL):</label>
              <input type="url" id="akcia-trasa-link" placeholder="https://mapy.com/..." />
            </div>
            <div class="form-group">
              <label for="akcia-popis">Popis:</label>
              <textarea id="akcia-popis" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="akcia-vybava">Čo si priniesť:</label>
              <textarea
                id="akcia-vybava"
                rows="2"
                placeholder="napr. teplé oblečenie, voda"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="akcia-obrazok">URL obrázka:</label>
              <input type="text" id="akcia-obrazok" placeholder="./IMG/nazov.jpg" />
            </div>
            <div class="form-group">
              <label for="akcia-zdroj">Zdroj (link):</label>
              <input type="text" id="akcia-zdroj" placeholder="https://..." />
            </div>
            <div class="form-actions">
              <button type="submit" class="btn-primary">Uložiť akciu</button>
              <button type="button" class="btn-secondary" id="cancel-akcia-btn">Zrušiť</button>
            </div>
          </form>
        </div>

        <!-- Zoznam akcií -->
        <div class="akcie-list">
          <h3>Existujúce akcie</h3>
          <div id="akcie-container" class="items-grid">
            <!-- Akcie sa načítajú sem -->
          </div>
        </div>
      </div>

      <!-- Tab: Fotky -->
      <div id="fotky-tab" class="tab-content">
        <div class="content-header">
          <h2>Správa Fotiek</h2>
          <button class="btn-add" id="add-fotka-btn">+ Pridať fotku</button>
        </div>

        <!-- Formulár na pridanie fotky -->
        <div id="fotka-form" class="form-container is-hidden">
          <h3>Nová Fotka</h3>
          <form id="nova-fotka-form">
            <div class="form-group">
              <label for="fotka-nazov">Názov/Popis:</label>
              <input type="text" id="fotka-nazov" required />
            </div>
            <div class="form-group">
              <label for="fotka-kategoria">Kategória:</label>
              <select id="fotka-kategoria">
                <option value="tury">Túry</option>
                <option value="akcie">Akcie</option>
                <option value="priroda">Príroda</option>
                <option value="ostatne">Ostatné</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fotka-upload">Nahrať fotku:</label>
              <input type="file" id="fotka-upload" accept="image/*" />
              <small>Alebo zadaj URL:</small>
              <input type="text" id="fotka-url" placeholder="https://..." />
            </div>
            <div class="form-group">
              <label for="fotka-datum">Dátum:</label>
              <input type="date" id="fotka-datum" />
            </div>
            <div class="form-actions">
              <button type="submit" class="btn-primary">Uložiť fotku</button>
              <button type="button" class="btn-secondary" id="cancel-fotka-btn">Zrušiť</button>
            </div>
          </form>
        </div>

        <!-- Galéria fotiek -->
        <div class="fotky-gallery">
          <h3>Existujúce fotky</h3>
          <div id="fotky-container" class="gallery-grid">
            <!-- Fotky sa načítajú sem -->
          </div>
        </div>
      </div>

      <!-- Tab: Nastavenia -->
      <div id="nastavenia-tab" class="tab-content">
        <div class="content-header">
          <h2>Nastavenia</h2>
        </div>

        <div class="settings-container">
          <div class="setting-group">
            <h3>Kontaktné údaje</h3>
            <div class="form-group">
              <label for="setting-telefon">Telefón:</label>
              <input type="text" id="setting-telefon" value="+421 1121 2221" />
            </div>
            <div class="form-group">
              <label for="setting-email">Email:</label>
              <input type="email" id="setting-email" value="info@gmail.com" />
            </div>
            <button class="btn-primary" id="save-settings-btn">Uložiť nastavenia</button>
          </div>

          <div class="setting-group">
            <h3>Správa dát</h3>
            <button class="btn-export" id="export-data-btn">📥 Exportovať všetky dáta</button>
            <button class="btn-import" id="import-data-btn">📤 Importovať dáta</button>
            <input type="file" id="import-file" accept=".json" class="is-hidden" />
          </div>

          <div class="setting-group">
            <h3>Nebezpečná zóna</h3>
            <button class="btn-danger" id="clear-all-btn">🗑️ Vymazať všetky dáta</button>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Admin JavaScript -->
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/admin.css"></style>

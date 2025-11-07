# 📘 Guía 04: Agregar Fotos del Equipo

## Objetivo

Organizar y agregar las fotos profesionales del equipo al sitio web de forma optimizada.

---

## ⏱️ Tiempo estimado: 15 minutos

---

## Paso 1: Preparar las Fotos

### 1.1 Requisitos de las Fotos

Para que las fotos se vean profesionales:

✅ **Formato**: JPG o PNG
✅ **Tamaño recomendado**: 800x800px o 1000x1000px
✅ **Aspect ratio**: 1:1 (cuadrado) o 4:5 (retrato)
✅ **Peso**: Menos de 500KB por foto
✅ **Fondo**: Preferiblemente neutro o profesional
✅ **Calidad**: Alta resolución pero optimizada para web

### 1.2 Ubicar tus Fotos

Actualmente tienes estas fotos en la raíz del proyecto:

- `Sebastian Ariel Paz.png`
- `Ariel Paz.jpg`

---

## Paso 2: Crear Estructura de Carpetas

Vamos a organizar las fotos en carpetas específicas.

### 2.1 Crear Carpeta para Fotos del Equipo

```bash
# En la raíz del proyecto
mkdir public/team
```

En Windows (CMD):

```cmd
mkdir public\team
```

### 2.2 Verificar la Estructura

Tu carpeta `public` debería verse así:

```
public/
├── team/                    # ← Nueva carpeta
├── hero-office.jpg
├── corporate-law-office.jpg
└── ... (otras imágenes)
```

---

## Paso 3: Mover y Renombrar las Fotos

### 3.1 Convención de Nombres

Usa nombres descriptivos en minúsculas con guiones:

❌ **Mal**: `Sebastian Ariel Paz.png`
✅ **Bien**: `sebastian-paz.jpg`

### 3.2 Mover las Fotos

**Opción A: Manualmente**

1. Copia `Sebastian Ariel Paz.png` a `public/team/`
2. Renómbrala a `sebastian-paz.jpg`

**Opción B: Por Línea de Comandos**

```bash
# Linux/Mac
cp "Sebastian Ariel Paz.png" public/team/sebastian-paz.png
cp "Ariel Paz.jpg" public/team/ariel-paz.jpg

# Windows (CMD)
copy "Sebastian Ariel Paz.png" public\team\sebastian-paz.png
copy "Ariel Paz.jpg" public\team\ariel-paz.jpg

# Windows (PowerShell)
Copy-Item "Sebastian Ariel Paz.png" public/team/sebastian-paz.png
Copy-Item "Ariel Paz.jpg" public/team/ariel-paz.jpg
```

---

## Paso 4: Optimizar las Fotos (Opcional pero Recomendado)

### 4.1 Herramientas de Optimización

**Opción A: Online (Más fácil)**

- [TinyPNG](https://tinypng.com/) - Comprime sin perder calidad
- [Squoosh](https://squoosh.app/) - De Google, muy bueno
- [Compressor.io](https://compressor.io/) - Múltiples formatos

**Opción B: Línea de Comandos (Avanzado)**

Si tienes ImageMagick instalado:

```bash
# Redimensionar a 800x800
magick convert sebastian-paz.png -resize 800x800 -quality 85 sebastian-paz.jpg

# Convertir a WebP (formato moderno)
magick convert sebastian-paz.png -quality 85 sebastian-paz.webp
```

### 4.2 Proceso de Optimización

1. Ve a [TinyPNG](https://tinypng.com/)
2. Arrastra tu foto
3. Espera a que se comprima
4. Descarga la versión optimizada
5. Reemplaza la foto en `public/team/`

---

## Paso 5: Actualizar la Base de Datos

Ahora necesitamos actualizar Supabase con las rutas correctas de las fotos.

### 5.1 Abrir Supabase SQL Editor

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto
3. Ve a **SQL Editor**
4. Click en **"New Query"**

### 5.2 Ver los Miembros Actuales

Primero, veamos qué miembros tenemos:

```sql
SELECT id, name, title, image_url
FROM team_members
ORDER BY order_number;
```

Click **"Run"** (▶️)

Verás algo como:

| id  | name                | title             | image_url           |
| --- | ------------------- | ----------------- | ------------------- |
| 1   | Sebastián Ariel Paz | Escribano Titular | /team-sebastian.jpg |
| 2   | Dr. Carlos Méndez   | Abogado Senior    | /team-carlos.jpg    |
| ... | ...                 | ...               | ...                 |

### 5.3 Actualizar la Foto de Sebastián

```sql
UPDATE team_members
SET image_url = '/team/sebastian-paz.jpg'
WHERE name = 'Sebastián Ariel Paz';
```

Click **"Run"** (▶️)

✅ Deberías ver: **"Success. 1 row(s) affected"**

### 5.4 Actualizar Otras Fotos

Si tienes más fotos del equipo:

```sql
-- Ejemplo para otro miembro
UPDATE team_members
SET image_url = '/team/carlos-mendez.jpg'
WHERE name = 'Dr. Carlos Méndez';

-- Puedes actualizar varios a la vez
UPDATE team_members
SET image_url = '/team/laura-garcia.jpg'
WHERE name = 'Dra. Laura García';
```

---

## Paso 6: Verificar en el Sitio

### 6.1 Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl + C)
# Inicia nuevamente
pnpm dev
```

### 6.2 Ver la Página del Equipo

1. Ve a [http://localhost:3000/equipo](http://localhost:3000/equipo)
2. Deberías ver las fotos actualizadas

✅ Si ves las fotos correctamente, ¡perfecto!

---

## Paso 7: Agregar Nuevos Miembros del Equipo

Si quieres agregar más miembros:

### 7.1 Preparar la Foto

1. Optimiza la foto siguiendo el Paso 4
2. Guárdala en `public/team/` con nombre descriptivo

### 7.2 Insertar en la Base de Datos

```sql
INSERT INTO team_members (
  name,
  title,
  specialty,
  bio,
  image_url,
  email,
  order_number
) VALUES (
  'María Fernández',
  'Abogada Asociada',
  'Derecho Inmobiliario',
  'Especialista en contratos de compraventa y escrituración.',
  '/team/maria-fernandez.jpg',
  'maria@escribanosebastianpaz.ar',
  6
);
```

---

## Paso 8: Usar Fotos de Placeholder (Temporal)

Si aún no tienes fotos profesionales, puedes usar placeholders:

### 8.1 Servicios de Placeholder

- [UI Faces](https://uifaces.co/) - Fotos profesionales gratuitas
- [This Person Does Not Exist](https://thispersondoesnotexist.com/) - Fotos generadas por IA
- [Unsplash](https://unsplash.com/s/photos/professional-portrait) - Fotos profesionales

### 8.2 Actualizar con Placeholder

```sql
UPDATE team_members
SET image_url = 'https://i.pravatar.cc/800?img=12'
WHERE name = 'Dr. Carlos Méndez';
```

---

## ✅ Checklist de Verificación

Antes de continuar, verifica:

- [ ] Carpeta `public/team/` creada
- [ ] Fotos movidas y renombradas correctamente
- [ ] Fotos optimizadas (menos de 500KB cada una)
- [ ] Base de datos actualizada con rutas correctas
- [ ] Fotos visibles en [http://localhost:3000/equipo](http://localhost:3000/equipo)
- [ ] Fotos se ven bien en móvil y desktop

---

## 🎯 Próximos Pasos

**📘 Guía 05: Personalizar Contenido y Branding**

En la siguiente guía aprenderás a:

- Cambiar colores y tipografías
- Actualizar información de contacto
- Personalizar servicios
- Modificar textos del sitio

---

## 🆘 Problemas Comunes

### Las fotos no se muestran

**Solución**:

- Verifica que las fotos estén en `public/team/`
- Verifica que la ruta en la BD sea correcta (`/team/nombre.jpg`)
- Reinicia el servidor
- Limpia la caché del navegador (Ctrl + Shift + R)

### Las fotos se ven pixeladas

**Solución**:

- Usa fotos de al menos 800x800px
- Verifica que no estés usando fotos muy comprimidas
- Usa formato JPG con calidad 85-90%

### Las fotos pesan mucho

**Solución**:

- Usa TinyPNG para comprimir
- Convierte a formato WebP
- Redimensiona a máximo 1000x1000px
- Usa calidad 80-85% en JPG

### Error 404 en las fotos

**Solución**:

- Verifica que la ruta empiece con `/` (ej: `/team/foto.jpg`)
- Verifica que el nombre del archivo coincida exactamente
- Verifica que la extensión sea correcta (.jpg, .png, .webp)

---

## 💡 Tips Profesionales

1. **Consistencia**: Usa el mismo fondo y estilo para todas las fotos
2. **Iluminación**: Fotos bien iluminadas se ven más profesionales
3. **Formato cuadrado**: Más fácil de trabajar en diseño responsive
4. **WebP**: Usa formato WebP para mejor compresión (navegadores modernos)
5. **Lazy loading**: Next.js lo hace automáticamente con el componente Image
6. **Alt text**: Agrega descripciones para accesibilidad

---

## 📚 Recursos Adicionales

- [Optimización de Imágenes en Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [Guía de Fotografía Profesional](https://www.adobe.com/creativecloud/photography/discover/professional-headshots.html)

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

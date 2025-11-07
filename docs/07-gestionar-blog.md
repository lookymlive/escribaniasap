# 📘 Guía 07: Gestionar Blog y Contenido

## Objetivo

Aprender a crear, editar y publicar artículos en el blog para atraer clientes y mejorar el SEO.

---

## ⏱️ Tiempo estimado: 15 minutos por artículo

---

## Paso 1: Acceder a la Gestión de Blog

### 1.1 Abrir Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto
3. Ve a **Table Editor**
4. Selecciona la tabla **blog_posts**

---

## Paso 2: Crear un Nuevo Artículo

### 2.1 Insertar Nueva Fila

Click en **"Insert row"** o **"+ New row"**

### 2.2 Completar Campos

**title** (Título):

```
Guía Completa para Comprar una Propiedad en Argentina
```

**slug** (URL amigable):

```
guia-comprar-propiedad-argentina
```

💡 **Tip**: El slug debe ser único, en minúsculas, sin espacios (usa guiones).

**excerpt** (Resumen corto):

```
Todo lo que necesitas saber sobre el proceso de compra de propiedades: documentación, costos, plazos y consejos profesionales.
```

**content** (Contenido completo):

```markdown
# Guía Completa para Comprar una Propiedad en Argentina

Comprar una propiedad es una de las decisiones más importantes de tu vida. En esta guía te explicamos paso a paso todo el proceso.

## 1. Búsqueda de la Propiedad

Lo primero es encontrar la propiedad ideal...

## 2. Verificación de Documentación

Es fundamental verificar que la propiedad tenga todos los papeles en regla...

## 3. Reserva y Seña

Una vez decidido, se firma un boleto de reserva...

## 4. Escrituración

El paso final es la escrituración ante escribano...

## Conclusión

Comprar una propiedad requiere asesoramiento profesional...
```

**featured_image_url** (Imagen destacada):

```
/blog/comprar-propiedad.jpg
```

**published** (Publicado):

- ✅ Marca como `true` para publicar
- ❌ Deja en `false` para guardar como borrador

**author_id** (Autor):

- Deja en blanco por ahora (o usa tu user ID si tienes auth configurado)

### 2.3 Guardar

Click en **"Save"** o **"Insert"**

---

## Paso 3: Agregar Imagen Destacada

### 3.1 Preparar la Imagen

**Requisitos**:

- Formato: JPG o PNG
- Tamaño: 1200x630px (ideal para redes sociales)
- Peso: Menos de 200KB
- Contenido: Relacionado con el artículo

### 3.2 Optimizar la Imagen

Usa [TinyPNG](https://tinypng.com/) para comprimir.

### 3.3 Subir la Imagen

1. Guarda la imagen en `public/blog/`
2. Nombre: `comprar-propiedad.jpg`
3. La URL será: `/blog/comprar-propiedad.jpg`

---

## Paso 4: Verificar el Artículo

### 4.1 Ver en el Sitio

1. Ve a [http://localhost:3000/blog](http://localhost:3000/blog)
2. Deberías ver tu nuevo artículo
3. Click para ver el artículo completo

### 4.2 Verificar SEO

Abre las herramientas de desarrollador (F12) y verifica:

- Meta title
- Meta description
- Open Graph tags

---

## Paso 5: Editar Artículo Existente

### 5.1 Encontrar el Artículo

En Supabase Table Editor:

1. Busca el artículo por título
2. Click en la fila para editarla

### 5.2 Hacer Cambios

Edita los campos que necesites:

- Corregir errores
- Actualizar información
- Mejorar contenido

### 5.3 Guardar Cambios

Click en **"Save"**

Los cambios se reflejarán inmediatamente en el sitio.

---

## Paso 6: Despublicar o Eliminar

### 6.1 Despublicar (Convertir a Borrador)

1. Encuentra el artículo
2. Cambia `published` a `false`
3. Guarda

El artículo ya no será visible en el sitio.

### 6.2 Eliminar Permanentemente

1. Selecciona la fila
2. Click en el icono de basura
3. Confirma la eliminación

⚠️ **Cuidado**: Esta acción no se puede deshacer.

---

## Paso 7: Ideas de Contenido para tu Blog

### Artículos Educativos

1. **"¿Qué es una escritura pública?"**

   - Explicación simple para clientes
   - Tipos de escrituras
   - Cuándo se necesita

2. **"Costos de escrituración en [Ciudad]"**

   - Desglose de costos
   - Impuestos involucrados
   - Formas de pago

3. **"Sucesiones: Guía paso a paso"**
   - Proceso completo
   - Documentación necesaria
   - Plazos estimados

### Artículos de Actualidad

4. **"Nuevas regulaciones inmobiliarias 2025"**

   - Cambios en la ley
   - Impacto para compradores
   - Recomendaciones

5. **"Tendencias del mercado inmobiliario"**
   - Análisis de mercado
   - Zonas en crecimiento
   - Proyecciones

### Casos de Éxito

6. **"Cómo ayudamos a [Cliente] con su empresa"**
   - Caso real (con permiso)
   - Desafíos enfrentados
   - Solución implementada

### Preguntas Frecuentes

7. **"10 preguntas frecuentes sobre escrituración"**
   - Recopilación de dudas comunes
   - Respuestas claras
   - Ejemplos prácticos

---

## Paso 8: Optimizar Artículos para SEO

### 8.1 Usar Palabras Clave

Identifica palabras clave relevantes:

- "escribano [ciudad]"
- "escrituración [ciudad]"
- "comprar propiedad [ciudad]"
- "sucesiones [ciudad]"

Úsalas naturalmente en:

- Título
- Primer párrafo
- Subtítulos
- Conclusión

### 8.2 Estructura del Contenido

✅ **Buena estructura**:

```markdown
# Título Principal (H1)

Introducción con palabra clave...

## Subtítulo 1 (H2)

Contenido...

### Subsección (H3)

Más detalles...

## Subtítulo 2 (H2)

Contenido...

## Conclusión

Resumen con llamado a la acción...
```

### 8.3 Longitud Ideal

- **Mínimo**: 800 palabras
- **Ideal**: 1,500 - 2,000 palabras
- **Máximo**: 3,000 palabras

### 8.4 Enlaces Internos

Enlaza a otras páginas de tu sitio:

```markdown
Si necesitas asesoramiento, [contáctanos](/contacto).

Conoce más sobre nuestros [servicios de escrituración](/servicios/escrituracion).
```

---

## Paso 9: Promocionar tus Artículos

### 9.1 Redes Sociales

Comparte en:

- Facebook
- LinkedIn
- Instagram (imagen + link en bio)
- WhatsApp Status

### 9.2 Email

Envía a tu lista de contactos:

- Newsletter mensual
- Email a clientes anteriores
- Email a prospectos

### 9.3 Google My Business

Publica como actualización en tu perfil de Google.

---

## Paso 10: Medir Resultados

### 10.1 Google Analytics

Revisa:

- Páginas más visitadas
- Tiempo en página
- Tasa de rebote
- Conversiones

### 10.2 Search Console

Monitorea:

- Impresiones en búsquedas
- Clics desde Google
- Posición promedio
- Palabras clave

---

## ✅ Checklist de Artículo de Calidad

Antes de publicar, verifica:

- [ ] Título atractivo y con palabra clave
- [ ] Slug optimizado (URL amigable)
- [ ] Excerpt convincente
- [ ] Contenido de al menos 800 palabras
- [ ] Estructura con H2 y H3
- [ ] Imagen destacada optimizada
- [ ] Sin errores ortográficos
- [ ] Enlaces internos agregados
- [ ] Llamado a la acción al final
- [ ] Revisado en preview

---

## 🎯 Calendario de Publicación Sugerido

**Frecuencia recomendada**: 1-2 artículos por mes

**Ejemplo de calendario**:

- Semana 1: Artículo educativo
- Semana 3: Artículo de actualidad
- Cada 3 meses: Caso de éxito

---

## 💡 Tips Profesionales

1. **Consistencia**: Publica regularmente
2. **Calidad > Cantidad**: Mejor 1 artículo excelente que 5 mediocres
3. **Evergreen**: Crea contenido que sea relevante por años
4. **Actualiza**: Revisa y actualiza artículos antiguos
5. **Escucha**: Escribe sobre lo que tus clientes preguntan
6. **Multimedia**: Agrega imágenes, videos, infografías
7. **CTA**: Siempre incluye un llamado a la acción

---

## 🆘 Problemas Comunes

### El artículo no aparece en el blog

**Solución**:

- Verifica que `published` esté en `true`
- Verifica que el `slug` sea único
- Reinicia el servidor de desarrollo

### La imagen no se muestra

**Solución**:

- Verifica que la imagen esté en `public/blog/`
- Verifica que la ruta sea correcta (`/blog/nombre.jpg`)
- Verifica que el formato sea JPG o PNG

### El contenido se ve mal formateado

**Solución**:

- Usa Markdown para formato
- Revisa que los saltos de línea sean correctos
- Usa preview antes de publicar

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

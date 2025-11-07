-- Insert initial services
insert into public.services (name, slug, description, order_number) values
  ('Derecho Corporativo', 'derecho-corporativo', 'Asesoramiento en constitución, modificación y disolución de sociedades. Fusiones, adquisiciones y restructuraciones empresariales.', 1),
  ('Derecho Inmobiliario', 'derecho-inmobiliario', 'Compraventa de inmuebles, contratos de alquiler, propiedad horizontal y cuestiones de hipotecas.', 2),
  ('Sucesiones', 'sucesiones', 'Testamentarías, inventarios, particiones de bienes y asesoramiento en herencias.', 3),
  ('Escrituración', 'escrituracion', 'Trámites notariales, legalización de documentos y procesos administrativos.', 4),
  ('Asesoramiento Legal', 'asesoramiento-legal', 'Consultoría jurídica preventiva para empresas y personas físicas.', 5);

-- Insert team members (fictional but professional)
insert into public.team_members (name, title, specialty, bio, order_number) values
  ('Sebastián Ariel Paz', 'Escribano Titular', 'Derecho Corporativo, Inmobiliario', 'Profesional con más de 20 años de experiencia en escribanía. Especializado en transacciones complejas y asesoramiento corporativo.', 1),
  ('Mariana González', 'Abogada', 'Derecho Inmobiliario y Sucesiones', 'Abogada especializada en derecho inmobiliario con 15 años de experiencia. Experta en resolución de conflictos de herencias.', 2),
  ('Carlos Mendez', 'Abogado', 'Derecho Corporativo', 'Especialista en constitución de empresas y fusiones. Asesor de más de 500 empresas en la región.', 3),
  ('Laura Fernández', 'Asistente Legal', 'Gestión de trámites administrativos', 'Profesional con 8 años en gestión de documentación legal y trámites notariales.', 4),
  ('Roberto Silva', 'Gestor Administrativo', 'Atención al cliente y seguimiento', 'Especialista en atención al público y seguimiento de expedientes. 10 años de trayectoria.', 5);

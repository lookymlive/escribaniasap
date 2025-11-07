-- Function to send email notification on new consultation request
create or replace function public.notify_consultation_request()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- This would typically call a webhook or send email service
  -- For now, just log the insertion
  insert into public.consultation_requests (name, email, phone, service_type, message, status)
  values (new.name, new.email, new.phone, new.service_type, new.message, new.status);
  
  return new;
end;
$$;

-- Create trigger for consultation notifications
drop trigger if exists on_consultation_created on public.consultation_requests;

create trigger on_consultation_created
  after insert on public.consultation_requests
  for each row
  execute function public.notify_consultation_request();

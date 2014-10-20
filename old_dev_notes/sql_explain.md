explain plan for
select loc_location_no,
  ln_list_number
from dpdapp.list_number_locations lnl
order by loc_location_no;

select * from table(dbms_xplan.display);
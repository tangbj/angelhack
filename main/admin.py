from django.contrib import admin
from main.models import CompanyRepresentative, Contest, Company, ContestUpdate

admin.site.register(Company)
admin.site.register(Contest)
admin.site.register(CompanyRepresentative)
admin.site.register(ContestUpdate)

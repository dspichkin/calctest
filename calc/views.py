import math
import json
from django.views.generic import View
from django.http import HttpResponse, JsonResponse


class CalcView(View):
    def post(self, request, *args, **kwargs):
        try:
            params = json.loads(request.body)
            amountMin = int(params.get("amountMin"))
            selectedNumOfExternalSystems = int(params.get("selectedNumOfExternalSystems"))
            selectedNumPowerClients = int(params.get("selectedNumPowerClients"))
            power = int(params.get("power"))
        except Exception as e:
            return HttpResponse('Error getting params %s' % e, status=501)

        if not amountMin or not selectedNumOfExternalSystems or \
                not selectedNumPowerClients or not power:
            return HttpResponse('All params required', status=501)

        serverAmount = math.floor(
            amountMin +
            10 * (pow(selectedNumOfExternalSystems, 0.25) +
                  50 * pow(selectedNumPowerClients, 0.5) +
                  power))

        return JsonResponse({
            "result": serverAmount
            })

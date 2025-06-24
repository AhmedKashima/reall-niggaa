
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import ContactMessage
# from rest_framework.decorators import api_view
# from rest_framework.response import Response


# @api_view(['GET'])
# def about_me(request):
#     data = {
#         "name": "Ahmed Kashima",
#         "bio": "Я full-stack разработчик, люблю Python, React и делать крутые вещи.",
#         "photo": "/media/profile.png",
#         "cv": "/media/ahmed_cv.pdf",
#         "contacts": {
#             "email": "kashimaahmed@gmail.com",
#             "telegram": "@kashimaahmed",
#             "github": "https://github.com/ahmedkashima",
#             "VK":"https://vk.com/kashimaa",
#             "Instagram": "https://www.instagram.com/ahmed.kashima.3o2/"
#         }
#     }
#     return Response(data)




# class ContactMessageView(APIView):
#     def post(self, request):
#         data = request.data
#         ContactMessage.objects.create(
#             name=data.get('name'),
#             email=data.get('email'),
#             message=data.get('message')
#         )
#         return Response({'success': True}, status=status.HTTP_201_CREATED)



# @api_view(['GET'])
# def about_me(request):
#     data = {
#         "name": "Your Name",
#         "bio": "Full-stack developer...",
#     }
#     return Response(data)



from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactFormSerializer


class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            message = serializer.validated_data['message']

            # Отправка письма
            send_mail(
                subject=f'Новое сообщение с сайта от {name}',
                message=f"Email: {email}\n\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False
            )

            return Response({'status': 'ok'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def about_me(request):
    data = {
        "name": "Ahmed Kashima",
        "bio": "Я full-stack разработчик, люблю Python, React и делать крутые вещи.",
        "photo": "/media/profile.png",
        "cv": "/media/ahmed_cv.pdf",
        "contacts": {
            "email": "kashimaahmed@gmail.com",
            "telegram": "@kashimaahmed",
            "github": "https://github.com/ahmedkashima",
            "vk": "https://vk.com/kashimaa",
            "instagram": "https://www.instagram.com/ahmed.kashima.3o2/"
        }
    }
    return Response(data)

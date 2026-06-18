from django.shortcuts import render
from django.utils.timezone import make_aware
from django.utils.dateparse import parse_datetime

# Create your views here.
def index(request):
    if request.method == 'POST':
        task = Task(title=request.POST['title'])
        task.save()

    tasks = Task.objects.all()

    context = {
        'tasks' : tasks
    }
    return render(request, 'todo/index.html', context)

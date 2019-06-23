from django.shortcuts import render, redirect

from django.http import JsonResponse

import requests

import pandas as pd
from bs4 import BeautifulSoup


# Create your views here.
def index(request):
  
  print("You're looking at the index page of scrapapp application!")
  
  r = requests.get('https://nerdstore.com.br/categoria/especiais/game-of-thrones/')
  print('Requisição bem sucedida!', r)
  content = r.content
  
  
  
  if request.method == 'GET':
    path = request.path
    #path = request.get_full_path()
    print(path)
    
    produto = request.GET['produto']
    print('Incoming request...')
   
    soup = BeautifulSoup(content, 'html.parser')
    
    # Scrapping
    prod_title = soup.find(name='h2', attrs={'class' : 'woocommerce-loop-product__title'})
    prod_link = soup.find(name='img', attrs={'class' : 'attachment-woocommerce_thumbnail size-woocommerce_thumbnail'})
    prod_preco = soup.find(name='span', attrs={'class' : 'woocommerce-Price-amount'})
   
    nome_str = str(prod_title)
    link_str = str(prod_link)
    preco_str = str(prod_preco)
    
    itens = []
    i = 0
    while i < len(nome_str):
      item = {
        "produto": nome_str[i],
        "link": link_str[i],
        "preco": preco_str[i]
      }
      itens.append(item)
      i += 1
    
    
    if produto is not None and produto != '':
      print("Let's get started scrapping: ", produto)
    
      # Buscando a posição da estrutura dentro da lista retornada
      prod_indice = itens.index(produto)
      
      selecao = {
        "produto": nome_str[prod_indice],
        "link": link_str[prod_indice],
        "preco": preco_str[prod_indice]
      }
      
      return JsonResponse(selecao)
    
     
  return JsonResponse(itens)
  



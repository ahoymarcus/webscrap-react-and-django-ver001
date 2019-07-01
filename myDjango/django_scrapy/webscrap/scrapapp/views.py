from django.shortcuts import render, redirect

from django.http import JsonResponse, Http404

import requests

import pandas as pd
from bs4 import BeautifulSoup


# Create your views here.

false_page = 'http://my-nonexistentpage.com/'
scrapy_page = 'https://nerdstore.com.br/categoria/especiais/game-of-thrones/'

content = bytearray()
produto = ''
scrap_itens = []


def index(request):
  
  print("You're looking at the index page of scrapapp application!")
  
  get_target_page(false_page)
  
  
  if request.method == 'GET':
    get_met(request)
    
    scrap_search()
    
  

def get_target_page(web_page):

  r = requests.get(web_page)
  
  if r.status_code == 200:
    print('Requisição bem sucedida!', r)
    content = r.content
    #print("Tipo do objeto:", type(content))
    
    web_scrapper()
    
    return JsonResponse(scrap_itens, safe=False)
  else:
    return Http404('<h1>Page not found</h1>')
  
 
def get_met(request): 
  path = request.path
  #path = request.get_full_path()
  print(path)
  
  produto = request.GET['produto']
  print('Incoming request for...', produto)
  
  #print("Tipo do objeto:", type(produto))
  
 

def web_scrapper():
  soup = BeautifulSoup(content, 'html.parser')
  
  # Scrapping
  prod_title = soup.find(name='h2', attrs={'class' : 'woocommerce-loop-product__title'})
  prod_link = soup.find(name='img', attrs={'class' : 'attachment-woocommerce_thumbnail size-woocommerce_thumbnail'})
  prod_preco = soup.find(name='span', attrs={'class' : 'woocommerce-Price-amount'})
 
  nome_str = str(prod_title)
  link_str = str(prod_link)
  preco_str = str(prod_preco)
  
  i = 0
  while i < len(nome_str):
    item = {
      "produto": nome_str[i],
      "link": link_str[i],
      "preco": preco_str[i]
    }
    scrap_itens.append(item)
    i += 1
  
  
def scrap_search():
  if produto is not None and produto != '':
    print("Let's get started scrapping: ", produto)
  
    # Buscando a posição da estrutura dentro da lista retornada
    prod_indice = scrap_itens.index(produto)
    
    selecao = {
      "produto": nome_str[prod_indice],
      "link": link_str[prod_indice],
      "preco": preco_str[prod_indice]
    }
    
    return JsonResponse(selecao)
  
  
  
  
  
  
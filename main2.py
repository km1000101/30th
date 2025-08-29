import speech_recognition as sr
import numpy as np
import matplotlib.pyplot as plt
import cv2
from easygui import *
import os
from PIL import Image, ImageTk
from itertools import count
import tkinter as tk
import string
#import selecting
# obtain audio from the microphone
def func():
        r = sr.Recognizer()
        isl_gif=['any questions', 'are you angry', 'are you busy', 'are you hungry', 'are you ok', 'are you okay', 'be careful',
                'did you finish homework', 'do not know', 'do you have money', 'do you want something to drink', 'do you watch TV', 
                'dont worry', 'flower is beautiful', 'good afternoon', 'good morning', 'good question', 'grapes', 'hello', 'hindu', 
                'how are you', 'hyderabad', 'i am a clerk', 'i am fine', 'i am sorry', 'i am thinking', 'i am tired', 
                'i go to a theatre', 'i had to say something but I forgot', 'i like pink colour', 'i love to shop', 'i love you',
                'job', 'july', 'june', 'karnataka', 'kerala', 'krishna', 'lets go for lunch', 'love you', 'mango', 'may', 'mile', 
                'mumbai', 'nagpur', 'nice to meet you', 'open the door', 'please call me later', 'please wait for sometime', 
                'police station', 'post office', 'pune', 'punjab', 'saturday', 'shall I help you', 'shall we go together tommorow', 
                'shop', 'sign language interpreter', 'sit down', 'stand up', 'take care', 'temple', 'thank you', 'there was traffic jam', 
                'thursday', 'toilet', 'tomato', 'tuesday', 'usa', 'village', 'wednesday', 'what are you doing', 'what is the problem', 
                'what is today\'s date', 'what is your father do', 'what is your mobile number', 'what is your name', 'whats up', 
                'where is the bathroom', 'where is the police station', 'you are wrong', 'address', 'ahemdabad', 'all', 'assam', 
                'august', 'banana', 'banaras', 'banglore', 'bridge', 'cat', 'christmas', 'church', 'cilinic', 'dasara', 'december']
        
        
        arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r', 's','t','u','v','w','x','y','z']
        with sr.Microphone() as source:
                # image   = "signlang.png"
                # msg="HEARING IMPAIRMENT ASSISTANT"
                # choices = ["Live Voice","All Done!"] 
                # reply   = buttonbox(msg,image=image,choices=choices)
                r.adjust_for_ambient_noise(source) 
                i=0
                while True:
                        print("I am Listening")
                        audio = r.listen(source)
                        # recognize speech using Sphinx
                        try:
                                a=r.recognize_google(audio)
                                a = a.lower()
                                print('You Said: ' + a.lower())
                                
                                for c in string.punctuation:
                                    a= a.replace(c,"")
                                    
                                if(a.lower()=='goodbye' or a.lower()=='good bye' or a.lower()=='bye'):
                                        print("oops!Time To say good bye")
                                        break
                                
                                elif(a.lower() in isl_gif):
                                    
                                    class ImageLabel(tk.Label):
                                            """a label that displays images, and plays them if they are gifs"""
                                            def load(self, im):
                                                if isinstance(im, str):
                                                    im = Image.open(im)
                                                self.loc = 0
                                                self.frames = []

                                                try:
                                                    for i in count(1):
                                                        self.frames.append(ImageTk.PhotoImage(im.copy()))
                                                        im.seek(i)
                                                except EOFError:
                                                    pass

                                                try:
                                                    self.delay = im.info['duration']
                                                except:
                                                    self.delay = 100

                                                if len(self.frames) == 1:
                                                    self.config(image=self.frames[0])
                                                else:
                                                    self.next_frame()

                                            def unload(self):
                                                self.config(image=None)
                                                self.frames = None

                                            def next_frame(self):
                                                if self.frames:
                                                    self.loc += 1
                                                    self.loc %= len(self.frames)
                                                    self.config(image=self.frames[self.loc])
                                                    self.after(self.delay, self.next_frame)
                                    root = tk.Tk()
                                    lbl = ImageLabel(root)
                                    lbl.pack()
                                    lbl.load(r'ISL_Gifs/{0}.gif'.format(a.lower()))
                                    root.mainloop()
                                else:
                                    for i in range(len(a)):
                                                    if(a[i] in arr):
                                            
                                                            ImageAddress = 'letters/'+a[i]+'.jpg'
                                                            ImageItself = Image.open(ImageAddress)
                                                            ImageNumpyFormat = np.asarray(ImageItself)
                                                            plt.imshow(ImageNumpyFormat)
                                                            plt.draw()
                                                            plt.pause(0.8)
                                                    else:
                                                            continue

                        except:
                               print(" ")
                        plt.close()
while 1:
  image   = "signlang.png"
  msg="HEARING IMPAIRMENT ASSISTANT"
  choices = ["Live Voice","All Done!"] 
  reply   = buttonbox(msg,image=image,choices=choices)
  if reply ==choices[0]:
        func()
  if reply == choices[1]:
        quit()

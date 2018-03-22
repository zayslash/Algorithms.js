#include <iostream>
#include <string>
//#include "Stack.h"
using namespace std;

struct Node
{
char data;
Node* link;
};
Node* createNode(char data,Node* link)
{
Node* tmp = new Node;
tmp->data = data;
tmp->link = link;
return tmp;
}

struct Stack
{
Node* top;
};

void initialize(Stack& _this)
{
_this.top = NULL;
}

bool isEmpty(const Stack& _this)
{
return _this.top == NULL;
}

char top(const Stack& _this)
{
return _this.top->data;
}

void push(Stack& _this,char item)
{
Node* tmp = createNode(item, _this.top);
_this.top = tmp;
}

void pop(Stack& _this)
{
if(!isEmpty( _this))
{
Node* tmp = _this.top;
_this.top = _this.top->link;
delete tmp;
tmp = NULL;
}
}




 bool IsPalindrome(char *str){
  Stack stack;
  initialize(stack);
  for(int i = 0; str[i] != '\0'; i++){
    push(stack, str[i]);
  }
  for(char *i = str ; (!isEmpty(stack)); *i++ )
    if (top(stack) == *i){
      pop(stack);
    }
    else if (top(stack) != *i){
      return false;
    }
  if(isEmpty(stack)){
    return true;
  }
  return false;
  }

int main()
{
  char *pointer_, array_[512];

  cout << "Enter A String:";
  cin >> array_;
  pointer_ = array_;
  if( IsPalindrome(pointer_)){
   cout << "true";
    }else{
   cout << "false";
    }
    return 0;
    }

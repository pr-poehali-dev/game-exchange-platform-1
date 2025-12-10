import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  titleEn: string;
  price: number;
  image: string;
  genre: string;
  genreEn: string;
  rating: number;
}

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    cardNumber: '',
    cardConnected: false,
    accountConnected: false
  });

  const games: Game[] = [
    { id: 1, title: 'Киберпанк 2077', titleEn: 'Cyberpunk 2077', price: 1999, image: '🎮', genre: 'RPG', genreEn: 'RPG', rating: 4.5 },
    { id: 2, title: 'Ведьмак 3', titleEn: 'The Witcher 3', price: 899, image: '⚔️', genre: 'RPG', genreEn: 'RPG', rating: 5.0 },
    { id: 3, title: 'Red Dead Redemption 2', titleEn: 'Red Dead Redemption 2', price: 2499, image: '🤠', genre: 'Экшен', genreEn: 'Action', rating: 4.8 },
    { id: 4, title: 'GTA V', titleEn: 'GTA V', price: 1299, image: '🚗', genre: 'Экшен', genreEn: 'Action', rating: 4.7 },
    { id: 5, title: 'Minecraft', titleEn: 'Minecraft', price: 699, image: '🧱', genre: 'Песочница', genreEn: 'Sandbox', rating: 4.9 },
    { id: 6, title: 'Elden Ring', titleEn: 'Elden Ring', price: 2299, image: '🗡️', genre: 'Souls-like', genreEn: 'Souls-like', rating: 4.6 },
    { id: 7, title: 'Baldur\'s Gate 3', titleEn: 'Baldur\'s Gate 3', price: 1899, image: '🐉', genre: 'RPG', genreEn: 'RPG', rating: 4.9 },
    { id: 8, title: 'Hogwarts Legacy', titleEn: 'Hogwarts Legacy', price: 1999, image: '🧙', genre: 'RPG', genreEn: 'RPG', rating: 4.4 }
  ];

  const t = {
    ru: {
      title: 'GameHub',
      subtitle: 'Маркетплейс игр',
      search: 'Поиск игр...',
      catalog: 'Каталог',
      wishlist: 'Избранное',
      profile: 'Профиль',
      faq: 'FAQ',
      addToWishlist: 'В избранное',
      removeFromWishlist: 'Удалить',
      buyNow: 'Купить сейчас',
      rating: 'Рейтинг',
      genre: 'Жанр',
      price: 'Цена',
      emptyWishlist: 'Список желаемого пуст',
      emptyWishlistDesc: 'Добавьте игры в избранное, чтобы следить за ними',
      profileTitle: 'Настройки профиля',
      profileDesc: 'Привяжите аккаунт и банковскую карту для покупок',
      name: 'Имя',
      email: 'Email',
      cardNumber: 'Номер карты',
      connectCard: 'Привязать карту',
      cardConnected: 'Карта привязана',
      connectAccount: 'Привязать аккаунт',
      accountConnected: 'Аккаунт привязан',
      save: 'Сохранить',
      faqTitle: 'Часто задаваемые вопросы',
      faq1Q: 'Как купить игру?',
      faq1A: 'Выберите игру из каталога, нажмите "Купить сейчас" и следуйте инструкциям. Для покупки необходимо привязать банковскую карту в профиле.',
      faq2Q: 'Как продать свою игру?',
      faq2A: 'Перейдите в раздел "Мои игры" в профиле, выберите игру, которую хотите продать, и укажите цену. После модерации игра появится в каталоге.',
      faq3Q: 'Безопасны ли платежи?',
      faq3A: 'Да, все платежи защищены SSL-шифрованием. Мы не храним данные вашей карты на наших серверах.',
      faq4Q: 'Могу ли я вернуть игру?',
      faq4A: 'Возврат возможен в течение 14 дней с момента покупки, если время игры менее 2 часов.',
      faq5Q: 'Как работает список желаемого?',
      faq5A: 'Добавляйте игры в избранное, чтобы отслеживать изменения цены и получать уведомления о скидках.'
    },
    en: {
      title: 'GameHub',
      subtitle: 'Game Marketplace',
      search: 'Search games...',
      catalog: 'Catalog',
      wishlist: 'Wishlist',
      profile: 'Profile',
      faq: 'FAQ',
      addToWishlist: 'Add to Wishlist',
      removeFromWishlist: 'Remove',
      buyNow: 'Buy Now',
      rating: 'Rating',
      genre: 'Genre',
      price: 'Price',
      emptyWishlist: 'Your wishlist is empty',
      emptyWishlistDesc: 'Add games to wishlist to track them',
      profileTitle: 'Profile Settings',
      profileDesc: 'Connect your account and bank card for purchases',
      name: 'Name',
      email: 'Email',
      cardNumber: 'Card Number',
      connectCard: 'Connect Card',
      cardConnected: 'Card Connected',
      connectAccount: 'Connect Account',
      accountConnected: 'Account Connected',
      save: 'Save',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'How to buy a game?',
      faq1A: 'Select a game from the catalog, click "Buy Now" and follow the instructions. You need to connect your bank card in the profile.',
      faq2Q: 'How to sell my game?',
      faq2A: 'Go to "My Games" section in your profile, select the game you want to sell, and set the price. After moderation, the game will appear in the catalog.',
      faq3Q: 'Are payments secure?',
      faq3A: 'Yes, all payments are protected by SSL encryption. We do not store your card data on our servers.',
      faq4Q: 'Can I return a game?',
      faq4A: 'Returns are possible within 14 days of purchase if playtime is less than 2 hours.',
      faq5Q: 'How does the wishlist work?',
      faq5A: 'Add games to your wishlist to track price changes and receive notifications about discounts.'
    }
  };

  const currentLang = t[language];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.titleEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const wishlistGames = games.filter(game => wishlist.includes(game.id));

  const toggleWishlist = (gameId: number) => {
    setWishlist(prev =>
      prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
    );
  };

  const handleConnectCard = () => {
    setUserProfile({ ...userProfile, cardConnected: true });
  };

  const handleConnectAccount = () => {
    setUserProfile({ ...userProfile, accountConnected: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🎮</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">{currentLang.title}</h1>
                <p className="text-sm text-muted-foreground">{currentLang.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="hover-scale"
              >
                {language === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN'}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowProfile(!showProfile)}
                className="relative hover-scale"
              >
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-4 relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={currentLang.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-muted hover:border-primary transition-colors"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="catalog" className="gap-2">
              <Icon name="Grid3x3" size={16} />
              {currentLang.catalog}
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="gap-2 relative">
              <Icon name="Heart" size={16} />
              {currentLang.wishlist}
              {wishlist.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground">
                  {wishlist.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="faq" className="gap-2">
              <Icon name="HelpCircle" size={16} />
              {currentLang.faq}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <Card
                  key={game.id}
                  className="hover-scale hover-glow cursor-pointer overflow-hidden border-muted bg-card/80 backdrop-blur"
                  onClick={() => setSelectedGame(game)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="text-6xl mb-2">{game.image}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(game.id);
                        }}
                      >
                        <Icon
                          name="Heart"
                          size={18}
                          className={wishlist.includes(game.id) ? 'fill-primary text-primary' : ''}
                        />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'ru' ? game.title : game.titleEn}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {language === 'ru' ? game.genre : game.genreEn}
                      </Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Icon name="Star" size={14} className="fill-current" />
                        <span className="text-xs">{game.rating}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{game.price} ₽</span>
                      <Button size="sm" className="animate-pulse-glow">
                        <Icon name="ShoppingCart" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="animate-fade-in">
            {wishlistGames.length === 0 ? (
              <Card className="p-12 text-center border-dashed">
                <Icon name="Heart" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">{currentLang.emptyWishlist}</h3>
                <p className="text-muted-foreground">{currentLang.emptyWishlistDesc}</p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistGames.map((game) => (
                  <Card key={game.id} className="hover-scale border-muted bg-card/80 backdrop-blur">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="text-6xl mb-2">{game.image}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleWishlist(game.id)}
                        >
                          <Icon name="X" size={18} />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">
                        {language === 'ru' ? game.title : game.titleEn}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="text-xs">
                          {language === 'ru' ? game.genre : game.genreEn}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{game.price} ₽</span>
                        <Button size="sm">
                          {currentLang.buyNow}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="faq" className="animate-fade-in">
            <Card className="max-w-3xl mx-auto border-muted bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={24} />
                  {currentLang.faqTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{currentLang.faq1Q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {currentLang.faq1A}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>{currentLang.faq2Q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {currentLang.faq2A}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>{currentLang.faq3Q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {currentLang.faq3A}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>{currentLang.faq4Q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {currentLang.faq4A}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>{currentLang.faq5Q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {currentLang.faq5A}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="sm:max-w-md bg-card border-muted">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="User" size={24} />
              {currentLang.profileTitle}
            </DialogTitle>
            <DialogDescription>
              {currentLang.profileDesc}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{currentLang.name}</label>
              <Input
                value={userProfile.name}
                onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                placeholder="Иван Иванов"
                className="bg-background border-muted"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{currentLang.email}</label>
              <Input
                value={userProfile.email}
                onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                placeholder="ivan@example.com"
                type="email"
                className="bg-background border-muted"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{currentLang.cardNumber}</label>
              <div className="flex gap-2">
                <Input
                  value={userProfile.cardNumber}
                  onChange={(e) => setUserProfile({ ...userProfile, cardNumber: e.target.value })}
                  placeholder="**** **** **** 1234"
                  className="bg-background border-muted"
                />
                <Button
                  onClick={handleConnectCard}
                  variant={userProfile.cardConnected ? 'secondary' : 'default'}
                  className="shrink-0"
                >
                  {userProfile.cardConnected ? (
                    <>
                      <Icon name="Check" size={16} />
                      {currentLang.cardConnected}
                    </>
                  ) : (
                    currentLang.connectCard
                  )}
                </Button>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <Button
                onClick={handleConnectAccount}
                variant={userProfile.accountConnected ? 'secondary' : 'default'}
                className="w-full"
              >
                {userProfile.accountConnected ? (
                  <>
                    <Icon name="Check" size={16} />
                    {currentLang.accountConnected}
                  </>
                ) : (
                  <>
                    <Icon name="Link" size={16} />
                    {currentLang.connectAccount}
                  </>
                )}
              </Button>
            </div>
            <Button className="w-full" size="lg">
              {currentLang.save}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {selectedGame && (
        <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
          <DialogContent className="sm:max-w-lg bg-card border-muted">
            <DialogHeader>
              <div className="text-6xl mb-4">{selectedGame.image}</div>
              <DialogTitle className="text-2xl">
                {language === 'ru' ? selectedGame.title : selectedGame.titleEn}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-3">
                <Badge variant="secondary">
                  {language === 'ru' ? selectedGame.genre : selectedGame.genreEn}
                </Badge>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Icon name="Star" size={16} className="fill-current" />
                  <span>{selectedGame.rating}</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-muted-foreground">{currentLang.price}:</span>
                <span className="text-3xl font-bold text-primary">{selectedGame.price} ₽</span>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" size="lg">
                  <Icon name="ShoppingCart" size={18} />
                  {currentLang.buyNow}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => toggleWishlist(selectedGame.id)}
                >
                  <Icon
                    name="Heart"
                    size={18}
                    className={wishlist.includes(selectedGame.id) ? 'fill-primary text-primary' : ''}
                  />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
